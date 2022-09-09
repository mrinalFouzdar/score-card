import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


function Section1() {
  return (
    <>
    
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

    </>
  )
}

export default Section1