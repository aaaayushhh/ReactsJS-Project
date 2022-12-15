import React, { useEffect, useState } from "react";
import { Row, Col, Nav, Navbar, Table, Card, Container, Button, Form } from 'react-bootstrap'
import "./Doctor.css"
import icon from "./Icon.png"
import { Link } from "react-router-dom";

function Doctor() {

    const [filterVal, setFilterVal] = useState('');
    const [ApiData, setApiData] = useState([]);
    const [input, setData] = useState([]);
    useEffect(() => {
        fetch("")
            .then((res) => res.json())
            .then((docs) => {
                setData(docs.Data);
                setApiData(docs.Data)
                console.log(docs.Data);
            });
    }, []);

    const handleFilter = (value) => {
        // e.preventDefault();
        if (value === '') {
            setData(ApiData)
        } else {
            const Result = ApiData.filter(item => item.ClinicName.includes(value))
            setData(Result)
        }
        setFilterVal(value);

    }


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

                <h3 className="mt-3">Doctors</h3>
                <Row>
                    <Col lg={{ span: 2 }}>
                        <Form.Group controlId="validationCustom01" className="drp mt-3 mb-3">
                            <Form.Select value={filterVal} onChange={(e) => setFilterVal(e.target.value)}>
                                {/* onInput={(e) => handleFilter(e)} */}
                                <option>Select Clinic</option>
                                {
                                    ApiData.map((name, index) =>
                                        <>
                                            <option key={index}>{name.ClinicName}</option>
                                        </>
                                    )
                                }
                                {/* <option>Clinic 2</option> */}
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Button className="search hide mt-3 mb-2" onClick={() => handleFilter(filterVal)}>Search</Button>
                    </Col>

                    <Row>
                        <Col lg={{ offset: 3 }} className="searchb">
                            <Button className="search mt-2 mb-2" onClick={() => handleFilter(filterVal)}>Search</Button>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }}>
                        <Card className="table p-3 pb-2">
                            <Table responsive>
                                <thead>
                                    <tr className="bgc">
                                        {/* <th className="border-0">Sr No.</th> */}
                                        <th className="border-0">Doctor's Name</th>
                                        <th className="border-0">Phone No.</th>
                                        <th className="border-0">Clinic's Name</th>
                                        <th className="border-0">Email ID</th>
                                    </tr>
                                </thead>
                                <br />
                                <tbody>
                                    {
                                        input.map((item, index) =>
                                            <tr className="bgc" key={index}>
                                                {/* <td className="border-0">{item.}</td> */}
                                                <td className="border-0">{item.Name}</td>
                                                <td className="border-0">{item.Mobile}</td>
                                                <td className="border-0">{item.ClinicName}</td>
                                                <td className="border-0">{item.Email}</td>
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

export default Doctor