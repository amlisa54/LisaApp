import down from '../assets/portfolio.jpg'
function About(){
    return(
        <div>
            <div className="about">
                <div className="word"> 
            <h1>About me!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat possimus alias at accusamus ipsum est culpa laudantium ratione quibusdam doloribus, autem placeat quod unde ab officiis debitis ipsa amet veritatis?</p>
        </div>

        <div className="image">
            <img src={down} alt="" />
        </div>
        </div>
        </div>
    )
}
export default About