import "./Technology.css"
import vehicleMobile from "../assets/technology/image-launch-vehicle-landscape.jpg"
import vehicleDesktop from "../assets/technology/image-launch-vehicle-portrait.jpg"

import capsuleMobile from "../assets/technology/image-space-capsule-landscape.jpg"
import capsuleDesktop from "../assets/technology/image-space-capsule-portrait.jpg"

import portMobile from "../assets/technology/image-spaceport-landscape.jpg"
import portDesktop from "../assets/technology/image-spaceport-portrait.jpg"

import {useState} from "react"
import Data from "../data.json"
let Technology = () =>{
   let [index,setIndex] = useState(0);
   let techImgDesktop = [vehicleDesktop,capsuleDesktop,portDesktop];
   let techImgMobile = [vehicleMobile,capsuleMobile,portMobile];
   let techName = [];
   let info = [];
     let i = 0;
     for(let tech of Data.technology){
       techName[i] = tech.name;
       info[i] = tech.description;
       i++; 
     }
    return (
    <main className="Technology">
         <div className="tech-grid">
            <h2 className="tech-title"><b>03</b> space launce 101</h2>
            <div className="tech-img-container">
                <img className="mobile-img" src={techImgMobile[index]} alt="" />
                <img className="desktop-img" src={techImgDesktop[index]} alt="" />
            </div>
            <div className="tech-info">
                <div className="tech-selector">
                {
                index === 0 ?
                <button onClick={() => {setIndex(0);}} className="tech-btn activated">1</button>
                :
                <button onClick={() => {setIndex(0);}} className="tech-btn">1</button>
              }
             {
                index === 1 ?
                <button onClick={() => {setIndex(1);}} className="tech-btn activated">2</button>
                :
                <button onClick={() => {setIndex(1);}} className="tech-btn">2</button>
              }             
             {
                index === 2 ?
                <button onClick={() => {setIndex(2);}} className="tech-btn activated">3</button>
                :
                <button onClick={() => {setIndex(2);}} className="tech-btn">3</button>
              }             
                </div>
                <div>
                <h2 className="tech-type">THE TERMINOLOGY...</h2>
                <h2 className="tech-name">{techName[index]}</h2>
                <p className="tech-description">{info[index]}</p>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Technology