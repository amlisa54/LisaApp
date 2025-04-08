import icon1 from '../assets/Blockchain Transactions_512px.png'
import icon2 from '../assets/learning_500px.png'
import icon3 from '../assets/python_500px.png'
import icon4 from '../assets/react_480px.png'

function Services(){
   return(
    <div>
        <div className="services-w">
        <h1>Services I provide</h1>
        </div>
     <div className="cards">
        <div className="card1">
             <div className="image">
                 <img src={icon1} alt="" />
                            </div>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa commodi minus.</p>
        </div>
        <div className="card1">
          <div className="image">
                <img src={icon2} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa commodi minus.</p>
        </div>
        <div className="card1">
          <div className="image">
                <img src={icon3} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa commodi minus.</p>
        </div>
        <div className="card1">
         <div className="image">
                <img src={icon4} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa commodi minus.</p>
        </div>
     </div>
    </div>
    
   ) 
}

export default Services