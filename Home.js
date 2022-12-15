import React from "react";
import { Container, Nav, Navbar, Carousel, Row, Col, Form, Card, Button, Table } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { BsFillBellFill } from "react-icons/bs";
import icon2 from "./Icon2.png"
import icon from "./Icon.png"
import { Link } from "react-router-dom"
import "./Home.css"

function Home() {

    return (
        <>
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

            <Container fluid>
                <Row>
                    <Col lg={{ span: 9 }}>
                        <Row className="mt-3">
                            <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                                <Carousel>
                                    <Carousel.Item interval={1500}>
                                        <img
                                            className="d-block"
                                            src="https://source.unsplash.com/1515x400/?medicine"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item interval={1500}>
                                        <img
                                            className="d-block"
                                            src="https://source.unsplash.com/1515x400/?healthcare"
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item interval={1500}>
                                        <img
                                            className="d-block"
                                            src="https://source.unsplash.com/1515x400/?hospital"
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 8 }} md={{ span: 8 }}>
                                <Card className="upcomingappointment mt-2">
                                    <Row>
                                        <Col lg={{ span: 10 }} xs={{ span: 10 }}>
                                            <h6 className="mx-2 mt-1">Upcoming Appointments</h6>
                                        </Col>
                                    </Row>

                                    <Table className="">
                                        <tbody className="up">
                                            <tr className="">
                                                <th>Dr. Priyanka Joshi</th>
                                                <th>18-May-2022</th>
                                                <th>10:00 AM</th>
                                            </tr>

                                            <tr className="">
                                                <th>Dr. Priyanka Joshi</th>
                                                <th>18-May-2022</th>
                                                <th>10:00 AM</th>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card>

                                <Row>
                                    <Col>
                                        <Card className="mt-2 bookappointment">
                                            <h6 className="mx-2 mt-1">Book Appointment</h6>

                                            <Row className="justify-content-end">
                                                <Col className="mt-2 text-end">
                                                    <Link to="">
                                                        <Button className="booknow mb-2 mx-2 px-4">Book Now</Button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row>
                                    <Col lg={{ span: 11 }}>
                                        <Link to="/Doctor" className="doc">
                                            <Card className="cardborder mt-2">
                                                <p className="mx-2 mt-2 text">New Doctors</p>
                                                <p className="mx-4 sizing">54</p>
                                                <Card className="smbox">
                                                    ^51%
                                                </Card>
                                            </Card>
                                        </Link>
                                    </Col>

                                    <Row>
                                        <Col>
                                            <Card className="cardborder mt-2">
                                                <p className="mx-2 text">New Clinics</p>
                                                <p className="mx-4 sizing">32</p>
                                                <Card className="smbox2">
                                                    ^40%
                                                </Card>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="mt-3 prof" lg={{ span: 3 }}>
                        <Card className="bcolor">
                            <Row>
                                <Col className="mt-3 mx-3" lg={{ span: 9 }}>
                                    <BsFillBellFill fontSize={22} />
                                </Col>

                                <Col className="mt-2 mx-2" lg={{ span: 1 }}>
                                    <Link to="/">
                                        <CiLogout fontSize={20} className="logout" />
                                    </Link>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
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
                                            <Col lg={{ span: 10 }}>
                                                <p className="st">All Activities</p>
                                            </Col>

                                            <Col className="mt-1">
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

export default Home