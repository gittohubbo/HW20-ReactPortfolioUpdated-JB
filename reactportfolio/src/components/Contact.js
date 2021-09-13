import React from "react";
import '../styles/Contact.css';


import ContactForm from './ContactForm';


import weather_app from "../images/projects/weather_app.png";
import scheduler from "../images/projects/scheduler.png";
import pet_shelter from "../images/projects/pet_shelter.png";

function Contact () {
    return (
      <div className="App">                 
          <ContactForm />           
      </div>
    );
  }
  


// function Contact() {
//     return (
//         <div class="container content-area">
//             <div class="row">
//                 <div class="col-md-12">
//                     <div class="contact">
//                         <h2><a href="mailto:jbensus@gmail.com?Subject=HelloWorld" target="_top">jbensus@gmail.com</a></h2>
//                         <div class="email-message">
//                             <p class="mzero">Feel free to drop me a note!</p>
//                             <p class="mzero">Thanks and have a great day!</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Contact;
