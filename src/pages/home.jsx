import down from '../assets/portfolio.jpg'
function Home(){
    return (
        <div>
            <div className="card">
                <div className="words">
                <h1>Hy am Lisa, <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem saepe reprehenderit </p></h1>
                
                </div>
                
                <div className="image">
                <img src={down} alt="" />
                
                </div>
            </div>
        </div>
    )
    
}
export default Home