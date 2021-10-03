import React from "react";

import Scheduler from "./img/scheduler.png";
import PetShelter from "./img/pet_shelter.png";
import PasswordGenerator from "./img/password_generator.png";
import WeatherApp from "./img/weather_app.png";
import Chico from "./img/Chico.png";
import ProjectCard from '../components/ProjectCard';

function Portfolio() {

    return (
            <div>
                <div class="section-heading">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2>Work</h2>
                                <p class="article-h2-content">My Work!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div clas="container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>A few of the projects I have developed so far!</h1>
                </div>

                <div className="album py-5" id="album">
                    <div className="container-fluid">
                    <div className="row">
                        <ProjectCard
                        image={Scheduler} 
                        alt={"Work Day Scheduler"}
                        title={"Work Day Scheduler"}
                        repo={"https://github.com/gittohubbo/05-HW-Scheduler-Jorge"} 
                        demo={"https://sleepy-cove-71764.herokuapp.com/"} 
                        />
                        <ProjectCard
                        image={PetShelter} 
                        alt={"Pet Shelter Website"}
                        title={"Pet Shelter Website"}
                        repo={"https://github.com/stessman/Project-2"} 
                        demo={""} 
                        />
                        <ProjectCard 
                        image={WeatherApp} 
                        alt={"Weather App"}
                        title={"Weather App"}
                        repo={"https://github.com/gittohubbo/06HW-Weather-Dashboard-JB"} 
                        demo={""} 
                        />
                        <ProjectCard
                        image={PasswordGenerator} 
                        alt={"Password Generator"}
                        title={"Password Generator"}
                        repo={"https://github.com/gittohubbo/09HW-README-Generator-Jorge"} 
                        demo={""} 
                        />
                    </div>  
                    <div className="row">
                        <ProjectCard 
                        image={Chico} 
                        alt={"Sample1"}
                        title={"sample1"}
                        repo={""} 
                        demo={""} 
                        />
                        <ProjectCard 
                        image={Chico} 
                        alt={"Sample2"}
                        title={"Sample2"}
                        repo={""} 
                        demo={""} 
                        />
                    </div>
                  </div>
                </div>
            </div>
    );
}

export default Portfolio;