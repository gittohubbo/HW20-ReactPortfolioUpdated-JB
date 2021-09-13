import React from "react";
import projects from "../projects.json";

function Card(props) {

    const cardStyle = {
        width: '18rem',
    };

    const randomWidth = () => {
        const number = Math.random() * (300 - 200) + 200;
        return number.toString().split('.')[0];
    };

    return (
        <div>
            <div className="card" style={cardStyle}>
                <img
                    className="card-img-top image img-fluid"
                    src={props.image}
                    alt="Card cap"
                />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">
                        Demo {props.title}
                    </a>
                </div>
            </div>
        </div>
        //         <div class="col-md-4">
        //             <div className="card">
        //                 <div className="project-img" alt="project-image">
        //                     <figure>
        //                         <img src="/src/images/projects/scheduler.png" height="100px" width="100" alt={props.title}></img>
        //                         <figcaption>
        //                             <h3 class="">{props.title}</h3>
        //                         </figcaption>
        //                     </figure>
        //                 </div>
        //                 <div className="project-details">
        //                     <div class="card-tags mbs">
        //                         <div class="card-tag"></div>
        //                     </div>
        //                     <h4 class="">{props.title}</h4>
        //                     <p class="mb0">{props.description}</p>
        //                 </div>
        //             </div>
        //         </div>
    );
}

export default Card;