const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const app = express()
const PORT = 3001

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())
app.use(cors(
    {
        origin: ['http://localhost:3000'],
        methods: ['POST, GET'],
        credentials: true
    }
))

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "bitebuddy_db"
})

const verifyUser = (request, response, next) => {
    const token = request.cookies.token
    if(!token) {
        return response.json({Message: 'You need to login first'})
    }
    else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                return response.json({Message: "Authentication error."})
            }
            else {
                request.email = decoded.email
                next()
            }
        })
    }
}

app.get('/', verifyUser, (request, response) => {
    const sqlGetUser = "SELECT * FROM users where email = ?"

    db.query(sqlGetUser, request.email, (err, result) => {
        if(err) {
            return response.json({Message: "Server side error"})
        }
        
        if(result.length > 0) {
            let reservation = []
            const sqlReservations = "SELECT * FROM reservations WHERE user_id = ?"
            db.query(sqlReservations, result[0].id, (error, res) => {
                if(error) {
                    console.log(error)
                }
                
                if(res) {
                    reservation.push(res)
                    const userData = {
                        id: result[0].id,
                        firstName: result[0].firstName,
                        lastName: result[0].lastName,
                        email: result[0].email,
                        contact: result[0].contact,
                        image: result[0].image,
                        reservations: reservation
                    }
                    return response.json({Status: "Success", data: userData})
                }
            })
        }
        else {
            return response.json({Message: "No record exist"})
        }
    })
})

app.post('/login', (request, response) => {
    const sqlLogin = "SELECT * from users WHERE email = ? AND password = ?"
    db.query(sqlLogin,[request.body.userEmail, request.body.userPass], (err, result) => {
        if(err) return response.json({Message: "Server side error."})
        if(result.length > 0) {
            const email = result[0].email
            const token = jwt.sign({email}, "jwt-secret-key", {expiresIn: '1d'})

            response.cookie('token', token)
            return response.json({Status:"Success"})
        }
        else {
            return response.json({Message: "No record existed."})
        }
    })
})

const isExisting = (request, response, next) => {
    const email = request.body.email
    const sqlUsers = "SELECT * from users WHERE email = ?"
    db.query(sqlUsers, email, (err, result) => {
        if(err) {
            console.log(err)
        }

        if(result.length == 0) {
            next()
        }
        else {
            return response.json({Status: 'Existed'})
        }
    })
}

app.post('/signup', isExisting, (request, response) => {
    const firstname = request.body.firstname
    const lastname = request.body.lastname
    const email = request.body.email
    const contact = request.body.contact
    const password = request.body.password

    const sqlAddUser = "INSERT INTO users (firstName, lastName, password, email, contact, isLogin) VALUES (?, ?, ?, ?, ?, '1')"
    db.query(sqlAddUser, [firstname, lastname, password, email, contact], (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            return response.json({Status: 'Success'})
        }
    })
})

app.get('/logout', (request, response) => {
    response.clearCookie('token')
    return response.json({Status: "Logged out"})
})

app.get('/partners', (request, response) => {
    const sqlPartners = "SELECT * from partner_companies"
    db.query(sqlPartners, (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            response.send(result)
        }
    })
})

app.post('/upload', upload.single('image'), (req,res) => {
    const image = req.file.filename;
    let id = 0
    const sqlGetUser = "SELECT * from users where isLogin = '1'"
    const sqlUploadImage = "UPDATE users SET image = ? WHERE id = ?"

    db.query(sqlGetUser, (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            id = result[0].id
            db.query(sqlUploadImage, [image, id], (err, result) => {
                if(err) {
                    return res.json({Message: "Error"})
                }
                return res.json({Status: "Success"})
            })
        }
    })
})


app.get('/user/login-status', (request, response) => {
    const sqlCheckLoggedInUser = `SELECT * from users WHERE isLogin = '1'`;
    db.query(sqlCheckLoggedInUser, (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            response.send(result)
        }
    })
})

app.post('/reservation', (request, response) => {
    const id = request.body.userid
    const partnerID = request.body.restaurantID
    const partnerName = request.body.restaurant
    const table = request.body.tableNo
    const time = request.body.selectedTime
    const date = request.body.selectedDate

    const sqlReserve = "INSERT into reservations (user_id, restaurant_id, table_no, time, date, status) VALUES (?, ?, ?, ?, ?, 'Confirmed')"
    db.query(sqlReserve, [id, partnerID, table, time, date], (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            response.send(result)
        }
    })
})

app.post('/reservations', (request, response) => {
    if(request.body.date != '') {
        
        const sqlReservations = "SELECT * from reservations WHERE date = ?"
        
        db.query(sqlReservations, request.body.date, (err, result) => {
            if(err) {
                console.log(err)
            }
            
            if(result) {
                let fetchedData = []
                result.forEach(data => {
                    let arr = {
                        restaurantID: data.restaurant_id,
                        tableNo: data.table_no
                    }
                    fetchedData.push(arr)
                })

                return response.json({Status: true, reservations: fetchedData})
            }
        })
    }
})


