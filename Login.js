import React from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap"
import "./Login.css";
import Photo from "./login 1.png"
import icon from "./Icon.png"
import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col className="p-0">
                        <Card className="loginim pb-1">
                            <div className="text-center"><img src={Photo} alt="" className="w-50 healthicon" /></div>
                        </Card>
                    </Col>


                    <Col md={{ span: 6 }} className="p-0">
                        <Card className="pb-5 bgcolor loginsize">
                            <Row>
                                <Col className="text-center pt-4">
                                    <img src={icon} alt="" className="loginicon" />
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col lg={{ span: 11 }} md={{ span: 12 }}>
                                    <Card className="pb-5 m-3 logincard">
                                        <Row className="justify-content-center">
                                            <Col md={{ span: 12 }}>
                                                <Form>
                                                    <Form.Group controlId="formHorizontalusername">
                                                        <Row className="p-2 pt-5">
                                                            <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 2 }}>
                                                                <Form.Label className="username pt-1">
                                                                    Username
                                                                </Form.Label>
                                                            </Col>
                                                            <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 10 }}>
                                                                <Form.Control type="username" className="textareacolor" />
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group controlId="formHorizontalpassword">
                                                        <Row className="p-2 pb-4 pt-4">
                                                            <Col xs={{ span: 12 }} lg={{ span: 2 }}>
                                                                <Form.Label className="password pt-1">
                                                                    Password
                                                                </Form.Label>
                                                            </Col>
                                                            <Col xs={{ span: 12 }} lg={{ span: 10 }}>
                                                                <Form.Control type="password" className="textareacolor" />
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                </Form>
                                                <Row className="text-center p-2">
                                                    <Col>
                                                        <Link to="/Home">
                                                            <Button className="w-100 loginbutton">Login</Button>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                                <Row className="text-end">
                                                    <Col className="">
                                                        <Button variant="Link" className="forgotcolor">Forgot Password?</Button>
                                                    </Col>
                                                </Row>
                                                <Row className="text-center p-2">
                                                    <Col>
                                                        <Link to="/Registeration">
                                                            <Button className="w-100 registerbutton">Register</Button>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row >
            </Container >
        </>
    );
}

export default Login