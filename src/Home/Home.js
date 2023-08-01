import "./Home.css"
import {Route,Routes,Link} from "react-router-dom"
import Destination from "../Destination/Destination";
let Home = ({setIndex}) =>{
    return (
        <section className="Home">
            <div className="home-main-container">
            <div className="text-section">
                <h1 className="home-title">
                    so, you want to travel to <br /><span className="largeFont">space</span>
                </h1>
                <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="explore-container">
            <Link to= "/space-firm-site/destination" onClick={()=>{setIndex(1);}}>EXPLORE</Link>
            </div>
            </div>
        <Routes>
        <Route path='/space-firm-site/destination' element = {<Destination/>}/>
        </Routes>
        </section>
    );
}

export default Home