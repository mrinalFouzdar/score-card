import React from 'react'
import { Row, Col } from 'react-bootstrap';
import result from "../data/result.json"

const Part2 = () => {
  return (
    <>
     <Col>
                            <Row className='border-bottom border-secondary'>
                                <Col className='text-center '> Part2</Col>
                            </Row>

                            <Row className='border-bottom border-secondary '>
                                <Col className='border-end border-secondary  pt-5 pb-4 p-xs-2'></Col>
                                <Col md={4} sm={4} xs={4} className="fw-5 fs-5 text-center" >Grade</Col>
                            </Row>

                            {
                                result.part_2.map((item,i)=> <Row key={Math.random()+ Date.now()} className="border-bottom border-secondary ">
                                    <Col className='pt-2 pb-2'>{item.department}</Col>
                                    <Col md={4} sm={4} xs={4} className="text-center border-start border-secondary pt-2 pb-2 fw-bold">{item.grade}</Col>
                                </Row>)
                            }
                        </Col>
    </>
  )
}

export default Part2