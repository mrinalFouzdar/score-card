import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import result from "../data/result.json"

const Part1 = () => {
  return (
    <>

<Col  md={9} sm={12} xs={12}>
                            <Row className='border-bottom border-secondary'>
                                <Col className='text-center '>
                                    Part1 Scholastic Areas
                                </Col>
                            </Row>
                        {/* <Section1/> */}

                        <Row className='border-bottom border-secondary'>
                                <Col className='text-center border-end border-secondary' md={1} sm={1} xs={1} >
                                    Sr No
                                </Col>
                                <Col md={6} sm={3} xs={5} className="border-end border-secondary text-center">Subject</Col>

                                <Col md={5}  sm={8} xs={6}>
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
                                        <Col md={4}  sm={4} xs={4} className="text-center border-secondary">
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
                                        <Col md={4}  sm={4} xs={4} className="text-center border-top border-secondary">
                                            100
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>


                            {
                                result.part_1.map((item,i)=> <Row key={Date.now()+Math.random()} className="border-bottom border-secondary">
                                    <Col md={1} sm={1} xs={1} className="text-center border-end border-secondary">{i+1}</Col>
                                    <Col md={6} sm={3} xs={5} className=" border-end border-secondary">{item.name} </Col>
                                    <Col md={5} sm={8} xs={6}>
                                        <Row>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary">
                                            {item.FA}
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary">
                                        {item.Oral1}
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary">
                                            {item.BA}
                                        </Col>

                                        <Col md={2} xs={2} sm={2} className="text-center ">
                                            {item.Oral2}
                                        </Col>
                                        <Col className="text-center border-start border-secondary">
                                            {item.Overall}
                                        </Col>
                                        </Row>
                                    </Col>
                                </Row>)
                            }


                            <Row className='border-bottom border-secondary'>
                                <Col md={1} sm={1} xs={1}></Col>
                                <Col md={6} sm={3} xs={5} className="border-end border-secondary">GRAND TOTAL</Col>
                                <Col md={5} sm={8} xs={6} className="text-end">
                                <Row>
                                        <Col md={2} xs={2} sm={2}>
                                            
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                                        
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                                            
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                
                                        </Col>
                                        <Col md={4}  sm={4} xs={4} className="text-center">
                                            x
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='border-bottom border-secondary'>
                                <Col md={1} sm={1} xs={1}></Col>
                                <Col md={6} sm={3} xs={5} className="border-end border-secondary">PERCENTAGE</Col>
                                <Col md={5} sm={8} xs={6} className="text-end">
                                <Row>
                                        <Col md={2} xs={2} sm={2}>
                                            
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                                        
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                                            
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                
                                        </Col>
                                        <Col md={4}  sm={4} xs={4} className="text-center">
                                            x
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='border-bottom border-secondary'>
                                <Col md={1} sm={1} xs={1}></Col>
                                <Col md={6} sm={3} xs={5} className="border-end border-secondary">RANK</Col>
                                <Col md={5} sm={8} xs={6} className="text-end">
                                <Row>
                                        <Col md={2} xs={2} sm={2}>
                                            
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                                        
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                                            
                                        </Col>
                                        <Col md={2} xs={2} sm={2}>
                
                                        </Col>
                                        <Col md={4}  sm={4} xs={4} className="text-center">
                                            V
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
    </>
  )
}

export default Part1