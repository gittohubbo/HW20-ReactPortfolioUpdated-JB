import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/Navbar.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: 'gray',
    justifyContent: 'flex-end'
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Jorge</a>
      <a href="/about">about</a>
      <a href="/work">work</a>
      <a href="/contact">contact</a>
      <a href="/resume">resume</a>
    </nav>

    // <nav style={styles.navbarStyle} className="navbar">
    //   <div class="container">
    //     <li><a class="active" href="/"><h1 class="mzero logo-name"></h1>Jorge</a></li>
    //   </div>

    //   <div class="collapse navbar-collapse" id="myNavbar">
    //     <ul class="nav navbar-nav navbar-right">


    //       <li><a class="active" href="/about">about</a></li>
    //       <li><a class="active" href="/work">work</a></li>
    //       <li><a class="active" href="/contact">contact</a></li>
    //       <li><a class="active" href="/resume">resume</a></li>
    //     </ul>
    //   </div>
    //   <br></br>

    // </nav >

  );
}

export default Navbar;
