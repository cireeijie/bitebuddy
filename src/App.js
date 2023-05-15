import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import FindYourNextBite from './pages/findYourNextBite';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/findYourNextBite' element={<FindYourNextBite/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
