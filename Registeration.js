import React from "react";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap"
import "./Registeration.css";
import { Link } from "react-router-dom";


function Registeration() {

    return (

        <Container fluid className="pic">

            <Row className="justify-content-center">
                <Col lg={{ span: 9 }}>
                    <Card className="bgcolor shadow mb-5">
                        <Row>
                            <Col>
                                <h2 className="mt-5 mb-4"> REGISTER </h2>
                            </Col>
                        </Row>

                        <Form>
                            <Row className="justify-content-center px-5 mb-3">
                                <Col lg={{ span: 6 }} className="mb-2">
                                    <Form.Group controlId="validationCustom01">
                                        <Form.Label className="textbold">First name<span>*</span></Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col lg={{ span: 6 }} className="mb-2">
                                    <Form.Group controlId="validationCustom02">
                                        <Form.Label className="textbold">Last name<span>*</span></Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="px-5 mb-3">
                                <Col lg={{ span: 6 }} className="mb-3">
                                    <Form.Group controlId="validationCustomUsername">
                                        <Form.Label className="textbold">Date Of Birth<span>*</span></Form.Label>
                                        <Form.Control
                                            type="date"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Date Of Birth.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col lg={{ span: 6 }} className="mb-2" >
                                    <Form.Group className="mb-3">
                                        <Form.Label className="textbold">Select Blood Group<span>*</span></Form.Label>
                                        <Form.Select>
                                            <option>O+</option>
                                            <option>O-</option>
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please Select your Blood Group
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="px-5 mb-3">
                                <Col lg={{ span: 6 }} className="mb-2">
                                    <Form.Group controlId="validationCustom04">
                                        <Form.Label className="textbold">Age<span>*</span></Form.Label>
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Age.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col lg={{ span: 6 }} className="mb-2">
                                    <Form.Group controlId="validationCustom05">
                                        <Form.Label className="textbold">Mobile No.<span>*</span></Form.Label>
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Mobile No.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="px-5 mb-3">
                                <Col lg={{ span: 6 }} className="mb-2">
                                    <Form.Group controlId="validationCustomUsername">
                                        <Form.Label className="textbold">Email<span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Email ID.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col lg={{ span: 6 }} className="mb-2">
                                    <Form.Label className="textbold">Gender<span>*</span></Form.Label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Male"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                                feedback="Please Click"
                                                feedbackType="invalid"
                                            />
                                            <Form.Check
                                                inline
                                                label="Female"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                                feedback="Please Click"
                                                feedbackType="invalid"
                                            />
                                        </div>
                                    ))}
                                </Col>
                            </Row>

                            <Row className="px-5 mb-3">
                                <Col lg={{ span: 12 }} className="mb-2">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="textbold">Address</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="px-5 mb-5">
                                <Col lg={{ span: 12 }} className="mb-2">
                                    <Form.Group controlId="validationCustom03">
                                        <Form.Label className="textbold">Aadhar Card Number</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="px-5 mb-5">
                                <Col className="text-end">
                                    <Link to="/">
                                        <Button type="submit" className="register textbold">Register</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}

export default Registeration