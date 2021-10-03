import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
      <Router>
      <Container fluid className="p-0">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
        </Container>
      </Router>
   
  );
}

export default App;
