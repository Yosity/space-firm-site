import "./Destination.css"
import {useState} from "react"
import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png"
import europia from "../assets/destination/image-europa.png"
import titan from "../assets/destination/image-titan.png"
import Data from "../data.json"
function Destination() {

  let [index,setIndex] = useState(0);

  let planetPicture = [moon,mars,europia,titan];
  let planetName = [];
  let planetInfo = [];
  let planetDist = [];
  let planetTravelTime = [];
    let i = 0;
    for(let destination of Data.destinations){
      planetName[i] = destination.name;
      planetInfo[i] = destination.description;
      planetDist[i] = destination.distance;
      planetTravelTime[i] = destination.travel;
      i++; 
    }
    return (
      <div className="Destination">
        <div className="destination-grid">
          <div className="planet-img">
          <h2 className="description-title"><b>01</b> pick your destination</h2>
          <img src={planetPicture[index]} alt="" />
          </div>
          <div className="planet-info">
            <nav className = "planet-selector">
              {
                index === 0 ?
                <button onClick={() => {setIndex(0);}} className="planetBtn activated">MOON</button>
                :
                <button onClick={() => {setIndex(0);}} className="planetBtn">MOON</button>
              }
             {
                index === 1 ?
                <button onClick={() => {setIndex(1);}} className="planetBtn activated">MARS</button>
                :
                <button onClick={() => {setIndex(1);}} className="planetBtn">MARS</button>
              }             
             {
                index === 2 ?
                <button onClick={() => {setIndex(2);}} className="planetBtn activated">EUROPA</button>
                :
                <button onClick={() => {setIndex(2);}} className="planetBtn">EUROPA</button>
              }             
             {
                index === 3 ?
                <button onClick={() => {setIndex(3);}} className="planetBtn activated">TITAN</button>
                :
                <button onClick={() => {setIndex(3);}} className="planetBtn">TITAN</button>
              }             
            </nav>
            <h1 className="planet-name">{planetName[index]}</h1>
            <p className ="description">{planetInfo[index]}</p>
            <div className="distance-travel-container">
              <p>avg distance <br /><span>{planetDist[index]}</span></p>
              <p>est. travel time<br /><span>{planetTravelTime[index]}</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Destination;
  