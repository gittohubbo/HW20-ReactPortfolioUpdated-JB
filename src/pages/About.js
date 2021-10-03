import React from "react";
import './about.css';
import Chico from "./img/Chico.png";

function About() {
  return (
    
    <>
      <div class="section-heading">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2>About</h2>
                                <p class="article-h2-content">About me!</p>
                            </div>
                        </div>
                    </div>
                </div>

          <div class="container">
              <div class="entry-content">
                  <div class="row">
                      <div class="buffer"></div>
                      <div class="col-md-3" clasName="chico-image">
                          <img className="chicoPic" src={Chico} class="prof-img img-responsive" alt="chico-image"></img>
                      </div>
                      <div class="col-md-7 col-md-offset-1 about-me">
                          <p>Hi, I am Jorge, an Information Technology Professional with a focus in networking arquitecture.</p>
                          <p>I am currently taking a Full-Stack web development course as I am expanding my career knowledge and
                              opportunities.</p>
                          <div class="fun-facts">
                              <p>A few things I like to do in my spare time:</p>
                              <ul>
                                  <li>Listen to and make music.</li>
                                  <li>Play with my mix MinPin and Jack Russell dog "Chico". Yes, the one on the picture! </li>
                                  <li>Go fishing.</li>
                                  <li>Spend time with my family.</li>
                                  <li>Watch the entire series The Office. Currently, I am on the 12th time.</li>
                              </ul>
                              <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                
                                
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </>  
  );
}

export default About;