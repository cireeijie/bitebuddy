import { useState } from "react"
import axios from "axios"
import '../css/uploadForm.css'

const UploadImage = ({open , close, id, updateUser}) => {
    const [ file, setFile ] = useState()

    const server = {
        host: 'http://13.236.165.58:3001',
        upload: '/upload'
    }

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }


    const handleUpload = (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('image', file)
        formdata.id = id

        axios.post(`${server.host}${server.upload}`, formdata)
        .then(response => {
            if(response.data.Status === 'Success') {
                alert("Upload successful!")
                window.location.reload(true)
            }
            else {
                alert('Upload failed')
            }
        })
        .catch(err => console.log(err))
    }

    if(!open) return null
    return (
        <div className="upload-modal">
            <div className="close-modal" onClick={close}></div>
            <div className="upload-container">
                <input type="file" onChange={handleFile} accept=".png,.jpg"/>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )
}

export default UploadImage