import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import result from "../data/result.json"
import "./style.css"

const Part3 = () => {
  return (
    <>
              <Row> 
                <Col className='text-center fw-bold'>PART-lll Attendence</Col>
            </Row>

            <Row>
                <Col   className="border border-secondary border-1 text-center m-2" >
                    <Row className='border-bottom border-secondary'>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary">
                            
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary fw-bold">
                            No. of Working Days
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary fw-bold">
                            No. of Days Present
                        </Col>
                        <Col md={3} sm={3} xs={3} className="text-xs-start paddingZero fw-bold">
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
                    <Col xs={{span:4}} > <span className="fw-bold">C.G.P:</span>  9.6</Col>
                    <Col xs={{span:3 ,offset:5}} className="text-end"> <span className='fw-bold fw-bold fw-bold'> Grade:</span> A1</Col>
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
                        <em>
                            Signature
                        </em>
                     </Col>
                     <Col xs={{span:6}} className="text-center ">
                        <em>
                        Signature     
                        </em>
                     </Col>
                     <Col xs={{span:3}}>
                     Parent  Signature
                     </Col>
                  </Row>
                  <Row>
                    <Col xs={{span:6, offset:3}} className="text-center fw-bold ">

                        <span className='fs-2'>G</span>RADING
                        
                        <span className='fs-2'> S</span>CALE
                        
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={{span:10, offset:1}} md={{span:6, offset:3}} className='border border-secondary border-1'>
                        <Row className="border-bottom border-secondary">
                            <Col sm={4} xs={4}className="border-end border-secondary text-center fw-bold fw-bold">
                                MARKS RANGE
                            </Col>
                            <Col sm={4} xs={4}className="border-end border-secondary text-center fw-bold fw-bold">
                                GRADES
                            </Col>
                            <Col sm={4} xs={4}className="text-center  fw-bold fw-bold">
                                REMARKS
                            </Col>
                        </Row>
                        {
                            result.part_3.map((item,i)=> <Row key={Date.now()+Math.random()} className='border-bottom border-1 border-secondary'>
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
            <Row className="border-top border-secondary border-1 text-center italicFront">
                <Col className='font-italic'>
                    <em>
                    Our Parents are seen Good on the Earth
                    </em>
                
                </Col>
            </Row>

    </>
  )
}

export default Part3