import React from 'react';
import CSS from './Intro.css';
import {Link} from 'react-router-dom';
import rocketimage from '../../assets/icons/PicsArt_04-14-04.42 1.svg'

const Intro = () => {
  return (
     <section className="flexible-sction">
        <div class="half-width">
            <h1 class="h1-border">Accelerate Innovation with 
            <br />
            Global AI Challenges</h1>
            <p>AI Challenges at DPhi simulate real-world problems.
           
             It is a great place to put your AI/Data Science skills to test on
             <br />
              diverse datasets
              allowing you to foster learning through competitions.</p>
            <Link className="create-challenge" to="/create-challenge">Create Challenge</Link>
        </div>
        <div class="half-width">
            <img src= "/assets/icons/PicsArt_04-14-04.42 1.svg" alt="image"/>
            {/* <img src={rocketimage} alt="image"/> */}
        </div>
    </section>
  )
}
     
  

export default Intro;