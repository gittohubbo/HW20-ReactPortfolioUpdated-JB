import React, { Component } from "react";
import Card from "../components/Card";
import projects from "../projects.json";
import '../styles/Work.css';

class Work extends Component {
    state = { projects };

    render() {
        return (
            <div>

                <div class="section-heading">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2>work</h2>
                                <p class="article-h2-content">A few applications I have developed so far!.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.projects.map(project => (
                    <Card
                        id={project.id}
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        url={project.url}
                    />
                ))}
            </div>
        );
    }
}

export default Work;