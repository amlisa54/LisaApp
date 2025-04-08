import Home from "./pages/home"
import About from "./pages/about"
import Services from "./pages/services"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Portifolio from "./pages/portifolio"
import Contact from "./pages/contact"
import Footer from "./components/footer"
function App(){

  return(

   <div>
     <BrowserRouter> 
     <Navbar/>
     <Routes>
      <Route path="/" element = {<Home></Home>}></Route>
      <Route path="/about" element = {<About></About>}></Route>
      <Route path="/services" element = {<Services></Services>}></Route>
      <Route path="/portifolio" element = {<Portifolio></Portifolio>}></Route>
      <Route path="/contact" element = {<Contact></Contact>}></Route>
     
     
     </Routes>
     <Footer/>
     </BrowserRouter>
    

     
   </div>
  )
}
export default App 
