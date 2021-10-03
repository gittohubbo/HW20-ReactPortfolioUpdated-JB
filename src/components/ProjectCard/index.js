import React from "react";

function ProjectCard(props) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card mb-4 box-shadow" style={{border: "5px solid rgb(100, 136, 158)"}}>
        <img className="card-img-top image img-fluid" src={props.image} alt={props.alt} />
        <div className="card-body">
          <p className="card-text">{props.title}</p>     
          <a href={props.repo} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Repo</button></a>
          <a href={props.demo} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Demo</button></a> 
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;