import "./Crew.css"
import douglas from "../assets/crew/image-douglas-hurley.webp"
import anousheh from "../assets/crew/image-anousheh-ansari.webp"
import mark from "../assets/crew/image-mark-shuttleworth.webp"
import victor from "../assets/crew/image-victor-glover.webp"
import {useState} from "react"
import Data from "../data.json"
let Crew = () =>{
    let [index,setIndex] = useState(0);
    let personPic = [douglas,anousheh,mark,victor];
    let name = [];
    let info = [];
    let occupation = [];
      let i = 0;
      for(let crew of Data.crew){
        name[i] = crew.name;
        info[i] = crew.bio;
        occupation[i] = crew.role;
        i++; 
      }
    return (
        <section className="Crew">
         <div className="crew-grid">
         <h2 className="title"><b>02</b>meet your crew</h2>
          <div className="crew-info">
            <h2 className="occupation">{occupation[index]}</h2>
            <h2 className="name">{name[index]}</h2>
            <p className="person-info">{info[index]}</p>
            <nav className = "crewmate-selector">
              {
                index === 0 ?
                <button onClick={() => {setIndex(0);}} className="crewBtn activated"></button>
                :
                <button onClick={() => {setIndex(0);}} className="crewBtn"></button>
              }
             {
                index === 1 ?
                <button onClick={() => {setIndex(1);}} className="crewBtn activated"></button>
                :
                <button onClick={() => {setIndex(1);}} className="crewBtn"></button>
              }             
             {
                index === 2 ?
                <button onClick={() => {setIndex(2);}} className="crewBtn activated"></button>
                :
                <button onClick={() => {setIndex(2);}} className="crewBtn"></button>
              }             
             {
                index === 3 ?
                <button onClick={() => {setIndex(3);}} className="crewBtn activated"></button>
                :
                <button onClick={() => {setIndex(3);}} className="crewBtn"></button>
              }             
            </nav>
          </div>
          <div className="img-container">
          <img className="person-img" src={personPic[index]} alt="" />
            </div>
        </div>
        </section>
    );
}

export default Crew