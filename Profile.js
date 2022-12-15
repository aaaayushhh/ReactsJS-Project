import React from "react";
import { Container, Row, Col, Card, Nav, Navbar, Form, Button } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { BsFillBellFill } from "react-icons/bs";
import icon2 from "./Icon2.png"
import icon from "./Icon.png"
import { Link } from "react-router-dom"
import "./Profile.css"

function Profile() {

    return (
        <>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Link to="/Profile">
                            <img src={icon} alt="" className="image" />
                        </Link>
                        <Navbar.Brand className="me-4" as={Link} to="/Home">Doctor's Patient Side Website</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                                <Nav.Link className="me-4" as={Link} to="/Home">Home</Nav.Link>
                                <Nav.Link className="me-4" as={Link} to="/Consultations">Consultations</Nav.Link>
                                <Nav.Link className="me-4" as={Link} to="/ContactUs">Contact Us</Nav.Link>
                                <Nav.Link className="me-4" as={Link} to="/FAQ">FAQ</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                            <Button variant="outline-dark">Search</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Row>
                    <Col className="mt-3 profile" lg={{ span: 3 }}>
                        <Card className="bcolor">
                            <Row>
                                <Col className="mt-3 mx-3" lg={{ span: 9 }} md={{ span: 10 }} sm={{ span: 9 }} xs={{ span: 9 }}>
                                    <BsFillBellFill fontSize={22} />
                                </Col>

                                <Col className="mt-2 mx-2" lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }}>
                                    <Link to="/">
                                        <CiLogout fontSize={20} className="logout" />
                                    </Link>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={{ offset: 3 }} sm={{ offset: 2 }} xs={{ offset: 1 }}>
                                    <BsFillPersonFill fontSize={50} className="icon mt-3" />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <p className="text-center name mt-2">Ram Kapoor</p>
                                </Col>
                            </Row>

                            <Row className="p-3">
                                <Col lg={{ span: 12 }}>
                                    <Card className="side">
                                        <Row className="px-3 mt-1">
                                            <Col lg={{ span: 10 }} md={{ span: 11 }} sm={{ span: 11 }} xs={{ span: 10 }}>
                                                <p className="st">All Activities</p>
                                            </Col>

                                            <Col className="mt-1" md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }}>
                                                <Link to="" className="link">
                                                    <div className="activities px-2"> > </div>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={{ span: 7 }} className="mx-3 mt-1">
                                    <p className="name">Last Sessions</p>
                                </Col>
                            </Row>

                            <Row className="p-3">
                                <Col>
                                    <Card>
                                        <Row>
                                            <Col lg={{ span: 10, offset: 1 }} className="mt-2">
                                                <Card className="sidecard mt-2">
                                                    <Row>
                                                        <img src={icon2} alt="" className="infoicon mx-3 mt-2" />
                                                        <Col className="mt-2">
                                                            <p className="sidetext">Dr.Anusha Joshi <br /> 10-May-2022</p>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={{ span: 10, offset: 1 }} className="mt-3">
                                                <Card className="sidecard mt-2">
                                                    <Row>
                                                        <img src={icon2} alt="" className="infoicon mx-3 mt-2" />
                                                        <Col className="mt-2">
                                                            <p className="sidetext">Dr.Anusha Joshi <br /> 10-May-2022</p>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={{ span: 10, offset: 1 }} className="mt-3 mb-4">
                                                <Card className="sidecard mt-2">
                                                    <Row>
                                                        <img src={icon2} alt="" className="infoicon mx-3 mt-2" />
                                                        <Col className="mt-2">
                                                            <p className="sidetext">Dr.Anusha Joshi <br /> 10-May-2022</p>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    );
}

export default Profile