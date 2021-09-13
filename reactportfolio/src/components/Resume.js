import React from "react";
import '../styles/Resume.css';
import JorgeResumeUpdating from "../images/Jorge-Resume-Updating.pdf";

function Resume() {
    return (
        <div class="container content-area">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="inline-block">Resume</h2>
                    <a href="src/images/Jorge-Resume-Updating.pdf" class="download-resume text-center right" alt="resume"
                        download>Download Resume</a>
                    <div id="resume">
                        <p>Please note that my resume is currently being updated.</p>
                        <p>More coming soon!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;