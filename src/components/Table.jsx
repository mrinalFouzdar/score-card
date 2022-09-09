import React from 'react'
// import "./table.css"
// import showData from "../data/file.json"
import result from "../data/result.json"
import { Container, Row, Col } from 'react-bootstrap';
import Section1 from './Section1';

const data = [{ top: "", btm: "20" }, { top: "Oral", btm: "10" }, { top: "BA", btm: "70" }, { top: "Oral", btm: 80 }, { top: "total marks", btm: 100 }]

const Tablecmpt = () => {
    return (

        <Container className='border border-secondary'>
            <Row className='border-bottom border-secondary'>
                <Col className='text-center ' >
                    <p className="clrRed fs-3 fw-3  text-center "  >  First Terminal Examination 2018-2019</p>
                </Col>
            </Row>
            <Row className='border-bottom border-secondary'>
                <Col className='text-center'>
                    <p className='fs-4  '> ACADEMIC PERFORMANCE</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Row className='border-bottom border-secondary'>
                        <Col className=' border-end' md={9} sm={12} xs={12}>
                            <Row className='border-bottom border-secondary'>
                                <Col className='text-center '>
                                    Part1
                                </Col>
                            </Row>
                        {/* <Section1/> */}

                        <Row className='border-bottom border-secondary'>
                                <Col className='text-center border-end border-secondary' md={1} sm={1} xs={1} >
                                    Sr No
                                </Col>
                                <Col md={6} sm={3} xs={3} className="border-end border-secondary text-center">Subject</Col>

                                <Col md={5}  sm={8} xs={8}>
                                    <Row>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary">
                                            FA
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary">
                                          Oral
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary">
                                            BA
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary">
                                            Oral
                                        </Col>
                                        <Col md={4}  sm={4} xs={4} className="text-center border-end border-secondary">
                                            Total Marks
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-top border-secondary">
                                            20
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-top border-secondary">
                                          10
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-top border-secondary">
                                            70
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-top border-secondary">
                                            80
                                        </Col>
                                        <Col md={4}  sm={4} xs={4} className="text-center border-end border-top border-secondary">
                                            100
                                        </Col>
                                    </Row>


                                    <Row>

                                    </Row>
                                </Col>
                            </Row>
                        </Col>



                        {/* Part-2 */}
                        <Col>
                            <Row className='border-bottom border-secondary'>
                                <Col className='text-center '> Part2</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}


{/* <Container className="border">

</Container> */}


export default Tablecmpt