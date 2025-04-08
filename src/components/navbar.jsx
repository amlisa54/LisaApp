import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div>
            
            <div className="nav">
                <div className="Mypage">
                <h1>Lisa.</h1>
                </div>
                <div className="links">
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/services">Services</Link>
            <Link to = "/portifolio">Portifolio</Link>
            <Link to = "/contact">Contact</Link>
            </div>
            </div>
            
        </div>
    )

}
export default Navbar

