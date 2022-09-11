import React from 'react'
// import "./table.css"
import data from "../data/result.json"
import { Container, Row, Col } from 'react-bootstrap';
import Part2 from './Part2';
import Part1 from './Part1';


const Tablecmpt = () => {
    return (

        <Container className='border border-secondary'>
            <Row className='border-bottom border-secondary'>
                <Col className='text-center '  >
                    <p className="clrRed fs-3 fw-3  text-center text-danger "  >  First Terminal Examination 2018-2019</p>
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
                      <Part1/>

                        {/* Part-2 */}
                       <Part2/>
                    </Row>
                </Col>
            </Row>
            {/* Part -3 */}
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

            {/* <Row className='mt-5'>
                <Col xs={{span:4}}>
                Signature
                </Col>
                <Col xs={{span:4}} className="text-center">
                Signature
                </Col>
                <Col xs={{span:2 ,offset:1}} className="">
                  Parent  Signature
                </Col>
            </Row>

            <Row>
                <Col className='text-center fw-bold fs-3'>
                    GRADING SCALE
                </Col>
            </Row>

            <Row>
                <Col xs={{span:6, offset:4}} className="border text-center">
                <Row>
                    <Col>a</Col>
                    <Col>a</Col>
                    <Col>a</Col>
                </Row>
                </Col>
            </Row> */}

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
                            data.part_3.map((item,i)=> <Row className='border-bottom border-secondary'>
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

        </Container>
    )
}


{/* <Container className="border">

</Container> */}


export default Tablecmpt