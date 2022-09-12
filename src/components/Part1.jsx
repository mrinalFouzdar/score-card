import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import result from "../data/result.json"
import { percentage, sum } from '../shared/helper';
import "./style.css"
const Part1 = () => {

  return (
    <>

<Col  md={9} sm={12} xs={12} className="border-end border-secondary border-1">
                            <Row className='border-bottom border-secondary'>
                                <Col className='text-center text-primary fw-bold'>
                                    Part1 Scholastic Areas
                                </Col>
                            </Row>

                        <Row className='border-bottom border-secondary'>
                                <Col className='text-center border-end border-secondary paddingZero' md={1} sm={1} xs={1} >
                                    Sr No
                                </Col>
                                <Col md={6} sm={3} xs={5} className="border-end border-secondary text-center">Subject</Col>

                                <Col md={5}  sm={8} xs={6}>
                                    <Row>
                                        <Col md={2} xs={2} sm={2} className="paddingZero text-center border-end border-secondary paddingZero">
                                            FA
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary paddingZero">
                                          Oral
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary paddingZero">
                                            BA
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary paddingZero">
                                            Oral
                                        </Col>
                                        <Col md={4}  sm={4} xs={4} className="text-center border-secondary">
                                            Total Marks
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-top border-secondary paddingZero">
                                            20
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-top border-secondary paddingZero">
                                          10
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-top border-secondary paddingZero">
                                            70
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-top border-secondary paddingZero">
                                            10
                                        </Col>
                                        <Col md={4}  sm={4} xs={4} className="text-center border-top border-secondary paddingZero">
                                            100
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>


                            {
                                result.part_1.map((item,i)=> <Row key={Date.now()+Math.random()} className="border-bottom border-secondary">
                                    <Col md={1} sm={1} xs={1} className="text-center border-end border-secondary paddingZero ">{i+1}</Col>
                                    <Col md={6} sm={3} xs={5} className=" border-end border-secondary">{item.name} </Col>
                                    <Col md={5} sm={8} xs={6}>
                                        <Row>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary paddingZero">
                                            {item.FA}
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary paddingZero">
                                        {item.Oral1}
                                        </Col>
                                        <Col md={2} xs={2} sm={2} className="text-center border-end border-secondary paddingZero">
                                            {item.BA}
                                        </Col>

                                        <Col md={2} xs={2} sm={2} className="text-center  paddingZero">
                                            {item.Oral2}
                                        </Col>
                                        <Col className="text-center border-start border-secondary paddingZero">
                                            {item.Overall}
                                        </Col>
                                        </Row>
                                    </Col>
                                </Row>)
                            }


                            <Row className='border-bottom border-secondary'>
                                <Col md={1} sm={1} xs={1}></Col>
                                <Col md={6} sm={3} xs={5} className="border-end border-secondary fw-bold">GRAND TOTAL</Col>
                                <Col md={5} sm={8} xs={6} className="text-end">
                                <Row>
                                <Col xs={{span:4 , offset:8}} className="text-center">
                                            {sum(result.part_1)}
                                </Col>
                               </Row>
                                </Col>
                            </Row>
                            <Row className='border-bottom border-secondary'>
                                <Col md={1} sm={1} xs={1}></Col>
                                <Col md={6} sm={3} xs={5} className="border-end border-secondary fw-bold">PERCENTAGE</Col>
                                <Col md={5} sm={8} xs={6} className="text-end">
                                <Row>

                                        <Col xs={{span:4 , offset:8}} className="text-center">
                                            {percentage(result.part_1)}
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='border-bottom border-secondary'>
                                <Col md={1} sm={1} xs={1}></Col>
                                <Col md={6} sm={3} xs={5} className="border-end border-secondary fw-bold">RANK</Col>
                                <Col md={5} sm={8} xs={6} className="text-end">
                                <Row>
                                        <Col xs={{span:4 , offset:8}} className="text-center">
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