import React from "react";
import money from "./money.png"
import { FiPhoneCall } from 'react-icons/fi'
import { AiFillMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
// import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { Row, Col, Nav, Navbar, Container, Button, Card, Form } from 'react-bootstrap'
import "./ContactUs.css"
import icon from "./Icon.png"
import { Link } from "react-router-dom"

function ContactUs() {

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
                    <Col lg={{ span: 6 }}>
                        <Row>
                            <Col lg={{ span: 10 }}>
                                <Card className="my-5 p-4 contact">
                                    <h4 className="mt-3 mb-5 contactus">Contact Us</h4>
                                    <Form>
                                        <Form.Group className="mb-4" controlId="formGroupName">
                                            <Form.Label className="bold">Name</Form.Label>
                                            <Form.Control type="name" className="type" />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formGroupEmail">
                                            <Form.Label className="bold">Email ID</Form.Label>
                                            <Form.Control type="email" className="type" />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className="bold">Ask Here</Form.Label>
                                            <Form.Control as="textarea" className="type" rows={3} />
                                        </Form.Group>
                                    </Form>
                                    <Row>
                                        <Col className="text-center">
                                            <Button className="submit px-5">Submit</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={{ span: 6 }} className="read mt-5">
                        <Row>
                            <Col>
                                <Card className="contactback">
                                    <h3 className="refer text-center p-2 mt-3">Refer</h3>
                                    <h5 className="textcolor text-center p-3">Invite Friends and Family</h5>
                                    <h6 className="share text-center">Share this Website with your friends and family.</h6><br />
                                    <h5 className="text-center">Earn more points and get more discounts</h5>
                                    <Row>
                                        <Col lg={{ offset: 5 }} md={{ offset: 5 }} xs={{ offset: 4 }}>
                                            <img
                                                className="money mt-2 mx-4"
                                                src={money}
                                                alt=""
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-center mt-4 mb-4">
                                        <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} className="mx-1 px-0">
                                            <a href="whatsapp://send?text=This is WhatsApp sharing example using link" data-action="share/whatsapp/share">
                                                <BsWhatsapp fontSize={25} className="whatsappcolor" />
                                            </a>
                                        </Col>

                                        {/* <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} className="mx-1 px-0">
                                            <a href="" data-action="share/instagram/share">
                                                <BsInstagram fontSize={25} className="instacolor" />
                                            </a>
                                        </Col> */}

                                        <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} className="mx-1 px-0">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" data-action="share/facebook/share">
                                                <BsFacebook fontSize={25} className="facebookcolor" />
                                            </a>
                                        </Col>

                                        <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} className="mx-1 px-0">
                                            <a href="https://www.linkedin.com/shareArticle?mini=true&amp;" data-action="share/linkedin/share">
                                                <BsLinkedin fontSize={25} className="linkedincolor" />
                                            </a>
                                        </Col>

                                        <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} className="mx-1 px-0">
                                            <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com" data-action="share/twitter/share">
                                                <BsTwitter fontSize={25} className="twittercolor" />
                                            </a>
                                        </Col>

                                        <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} className="mx-1 px-0">
                                            <a href="mailto:lorem@ipsum.com">
                                                <SiGmail fontSize={25} className="gmailcolor" />
                                            </a>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        {/* <p className="writeup mt-5">We are here to help and answer all your queries you might have.</p><br /> */}
                        {/* <h4>Book a Demo</h4><br />
                        <p className="writeup">Request a demo for one specilist to know more about the app.</p><br /> */}
                        {/* <Button className="send">Talk To Expert</Button> */}
                        <p className="writeup mt-5">For more Help</p>
                        <Row>
                            <Col>
                                <p className="writeup"><FiPhoneCall className="mx-2" />Call on : +91 9876543210</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="writeup"><AiFillMail className="mx-2" />Mail on :<Button variant="link" onClick={() => window.location = 'mailto: abc@gmail.com'}>abc@gamil.com</Button></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </>
    );
}

export default ContactUs