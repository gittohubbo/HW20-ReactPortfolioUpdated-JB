import React from 'react';
import JorgeResumeUpdating from "./img/Jorge-Resume-Updating.pdf";

function Resume() {

  return (
      <>

                <div class="section-heading">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2>Resume</h2>
                                <p class="article-h2-content">My Resume</p>
                            </div>
                        </div>
                    </div>
                </div>
       
          <div class="container content-area">
            <div class="row">
                <div class="col-md-12">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2 class="inline-block">Resume</h2>
                    <a href={JorgeResumeUpdating} class="download-resume text-center right" alt="resume"
                        download>Download Resume</a>
                    <div id="resume">
                        <p>Please note that my resume is currently being updated.</p>
                        <p>More coming soon!</p>
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
                        <br></br>
                    </div>
                </div>
            </div>
          </div>
      </>
  );
}

export default Resume;