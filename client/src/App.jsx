import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './pages/Header'
import Footer from './components/Footer';
import  Home from './pages/Home';
import Project from './pages/Project';
import AboutUs from './pages/AboutUs';
import OurClients from './pages/OurClients';
import ContactUs from './pages/ContactUs'
import OurServices from './pages/OurServices';
import Test from './pages/Test';
function App() {

  return (
    <>
    
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/clients' element={<OurClients />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/services' element={<OurServices/>} />
        <Route path='/test' element={<Test/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
 
    </>
  )
}

export default App
