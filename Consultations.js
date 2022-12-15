import React, { useEffect, useState } from "react";
import { Row, Col, Nav, Navbar, Table, Card, Container, Button, Form } from 'react-bootstrap'
import "./Consultations.css"
import icon from "./Icon.png"
import { Link } from "react-router-dom";

function Consultations() {

    const [input, setData] = useState([]);
    useEffect(() => {
        fetch("https://reqres.in/api/unknown").then((result) => {
            result.json().then((resp) => {
                setData(resp.data);
                console.log(resp.data)
            })
        })
    }, []);

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

            <Container>

                <h3 className="mt-3">Consultations Information</h3>

                <Row>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }}>
                        <Card className="table p-3 pb-2">
                            <Table responsive>
                                <thead>
                                    <tr className="bgc">
                                        {/* <th className="border-0">Sr No.</th> */}
                                        <th className="border-0">ID</th>
                                        <th className="border-0">Doctor's Name</th>
                                        <th className="border-0">Year Of Consultation</th>
                                        <th className="border-0">Report ID</th>
                                    </tr>
                                </thead>
                                <br />
                                <tbody>
                                    {
                                        input.map((item, index) =>
                                            <tr className="bgc" key={index}>
                                                {/* <td className="border-0">{item.}</td> */}
                                                <td className="border-0">{item.id}</td>
                                                <td className="border-0">{item.name}</td>
                                                <td className="border-0">{item.year}</td>
                                                <td className="border-0">{item.pantone_value}</td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </Table >
                        </Card >
                    </Col >
                </Row >
            </Container >
        </>
    );
}

export default Consultations