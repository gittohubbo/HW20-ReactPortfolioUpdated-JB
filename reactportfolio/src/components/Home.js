import React from "react";
import '../styles/Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import weather_app from "../images/projects/weather_app.png";
import scheduler from "../images/projects/scheduler.png";
import pet_shelter from "../images/projects/pet_shelter.png";
import projects from "../projects.json";


function Home() {
    return (
        <div class="jumbotron bg-none">
            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                        <h1 class="uppercase mbm">Full-Stack Web Development</h1>
                        <p>Student</p>

                        <div class="col-3 col-md-3 text-left">
                            <h1>
                                About Me
                            </h1>
                        </div>
                        <div class="col-12 col-md-9">
                            <div class="container">
                                <p>Jorge is an Information Technology Professional with a focus in networking
                                    arquitecture.<br></br>
                                    He is currently taking a Full-Stack web development course as he is expanding his career
                                    knowledge and opportunities.
                                </p>
                            </div>
                        </div>

                        <div class="col-3 col-md-3 text-left">
                            <h1>
                                Work
                            </h1>
                        </div>

                        <div class="col-12 col-md-9">
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                {/* <!-- Indicators --> */}
                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>

                                {/* <!-- Wrapper for slides --> */}
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <img src={weather_app} alt="weather"></img>
                                    </div>

                                    <div class="item">
                                        <img src={scheduler} alt="scheduler"></img>
                                    </div>

                                    <div class="item">
                                        <img src={pet_shelter} alt="petshelter"></img>
                                    </div>
                                </div>

                                {/* <!-- Left and right controls --> */}
                                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;