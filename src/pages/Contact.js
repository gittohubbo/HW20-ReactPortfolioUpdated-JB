import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact(props) {
    return (
        <>

                <div class="section-heading">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2>Contact me!</h2>
                                <p class="article-h2-content">Contact</p>
                            </div>
                        </div>
                    </div>
                </div>

        <Container className="my-5">
                
                <div clas="container">
                    <h2 class="mzero">Feel free to drop me a note!</h2>   
                    <h3 class="mzero">Thanks and have a great day!</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>CONTACT FORM</h1>
                </div>    
                   
                <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Inquiry or comment:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>         
        </Container>
        </>
    )
}
export default Contact;