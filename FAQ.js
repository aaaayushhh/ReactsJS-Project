import React from "react";
import { Nav, Navbar, Container, Accordion, Card, Form, Button } from 'react-bootstrap'
import "./FAQ.css"
import icon from "./Icon.png"
import { Link } from "react-router-dom"

function FAQ() {

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

                <h3 className="mt-5">Frequently Asked Questions</h3>

                <Accordion defaultActiveKey="0" className="mt-5">
                    <Accordion.Item eventKey="0" className="mb-3">
                        <Accordion.Header className="bco">Query</Accordion.Header>
                        <Accordion.Body className="bco mt-2">
                            <Card className="faq mx-3 my-1 p-2">
                                Email your Queries on abc@gmail.com
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mb-3">
                        <Accordion.Header>Complaints</Accordion.Header>
                        <Accordion.Body className="bco mt-2">

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mb-3">
                        <Accordion.Header>Medicines</Accordion.Header>
                        <Accordion.Body className="bco mt-2">

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mb-3">
                        <Accordion.Header>Previous Consultation Details</Accordion.Header>
                        <Accordion.Body className="bco mt-2">

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="mb-3">
                        <Accordion.Header>Treatment Plan</Accordion.Header>
                        <Accordion.Body className="bco mt-2">

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="mb-3">
                        <Accordion.Header>Lab Order</Accordion.Header>
                        <Accordion.Body className="bco mt-2">

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
}

export default FAQ