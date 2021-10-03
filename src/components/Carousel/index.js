import React from "react";
import './style.css';

function Carousel(props) {
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

    <div id="carouselWrapperFade" className="carousel slide carousel-fade" data-ride="carousel" {...props}>
      {props.children}

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100 img1" />
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img2" />
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img3" />
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselWrapperFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselWrapperFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    </div>
    </div>
    </div>
    </div>
  );
}

export default Carousel;