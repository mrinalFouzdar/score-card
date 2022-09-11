import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import result from "../data/result.json"

const Part3 = () => {
  return (
    <>
              <Row> 
                <Col className='text-center'>PART-lll Attendence</Col>
            </Row>

            <Row>
                <Col   className="border border-secondary text-center m-2" >
                    <Row className='border-bottom border-secondary'>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary">
                            
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary">
                            No. of Working Days
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary">
                            No. of Days Present
                        </Col>
                        <Col md={3} sm={3} xs={3} className="text-xs-start">
                            Percentage
                        </Col>
                    </Row>
                    <Row >
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary">
                            TERM - l
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary">
                            83
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary">
                            83
                        </Col>
                        <Col md={3} sm={3} xs={3} >
                            100
                        </Col>
                    </Row>
                </Col>
            </Row>


            <Row>
                <Col>
                <Row>
                    <Col xs={{span:4}}>C.G.P: 9.6</Col>
                    <Col xs={{span:3 ,offset:5}} className="text-end">Grade: A1</Col>
                </Row>
                <Row>
                    <Col xs={{span:4}}>
                        Teacher's Remarks - Excellent
                    </Col>
                </Row>
                </Col>
            </Row>


            <Row className='mt-5'>
                <Col>
                  <Row>
                     <Col xs={{span:3}}>
                     Signature
                     </Col>
                     <Col xs={{span:6}} className="text-center ">
                     Signature
                     </Col>
                     <Col xs={{span:3}}>
                     Parent  Signature
                     </Col>
                  </Row>
                  <Row>
                    <Col xs={{span:6, offset:3}} className="text-center fw-bold fs-3">
                        GRADING SCALE
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={{span:10, offset:1}} md={{span:6, offset:3}} className='border border-secondary'>
                        <Row className="border-bottom border-secondary">
                            <Col sm={4} xs={4}className="border-end border-secondary text-center">
                                MARKS RANGE
                            </Col>
                            <Col sm={4} xs={4}className="border-end border-secondary text-center">
                                GRADES
                            </Col>
                            <Col sm={4} xs={4}className="text-center ">
                                REMARKS
                            </Col>
                        </Row>
                        {
                            result.part_3.map((item,i)=> <Row key={Date.now()+Math.random()} className='border-bottom border-secondary'>
                            <Col sm={4} xs={4}className="border-end border-secondary text-center">
                                {item.marks_range}
                            </Col>
                            <Col sm={4} xs={4}className="border-end border-secondary text-center">
                                {item.grade}
                            </Col>
                            <Col sm={4} xs={4} >
                                {item.remarks}
                            </Col>
                            </Row>)
                        }
                    </Col>
                  </Row>

                </Col>
            </Row>
            <Row className="border-top border-secondary text-center">
                <Col >
                 Our Parents are seen Good on the Earth
                </Col>
            </Row>

    </>
  )
}

export default Part3