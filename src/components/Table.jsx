import React from 'react'
import "./table.css"
// import showData from "../data/file.json"
import result from "../data/result.json"
import { Container, Row, Col } from 'react-bootstrap';

const data = [{ top: "FA", btm: "20" }, { top: "Oral", btm: "10" }, { top: "BA", btm: "70" }, { top: "Oral", btm: 80 }, { top: "Overall", btm: 100 }]

const Tablecmpt = () => {
    return (
        <>

            <Container className="mt-3 border p-0">
                <Row >
                    <Col className='text-center' >
                        <p className="clrRed fs-3 fw-3 border-bottom text mb-0"  >  First Terminal Examination 2018-2019</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <p className='fs-4 border-bottom mb-0'> ACADEMIC PERFORMANCE</p>
                    </Col>
                </Row>

                <Row >
                    <Col className='border-end ' md={8} sm={12} xs={12} >
                        <Row className='border-bottom ms-0'>
                            <Col className='text-center '>
                                Part1
                            </Col>
                        </Row>
                        <Row>
                        <Col className='text-center' >Sr No</Col>
                        <Col md={6} sm={3} className="border-start text-center">Subject</Col>
                        {

                            data.map((item, i) => <Col key={i} className='border-end border-start ' md={1} sm={1} >
                                <Row className='text-center border-bottom '>
                                    <Col className='text-center' >
                                        {item.top}
                                    </Col>
                                </Row>
                                <Row className='text-center '>
                                    <Col className='text-center'>
                                        {item.btm}
                                    </Col>
                                </Row>
                            </Col>)
                            }
                        </Row>


                        {

<<<<<<< HEAD
                            result.part_1.map((item, i) => <Row key={Date.now() + Math.random()} className="border-bottom border-top ms-0">
                                <Col md={1} sm={1} xs={2} className="text-center border-end "> {i + 1}</Col>
                                <Col md={6} sm={3} xs={5} className=" border-end"> {item.name}</Col>
                                <Col className="text-center border-end" md={1} sm={1} xs={1}> {item.FA}</Col>
                                <Col className="text-center border-end" md={1} sm={1} xs={1} > {item.Oral1}</Col>
                                <Col className="text-center border-end" md={1} sm={1} xs={1}> {item.BA}</Col>
                                <Col className="text-center border-end" md={1} sm={1} xs={1}> {item.Oral2}</Col>
                                <Col className="text-center border-end" md={1} sm={1} xs={1}> {item.Overall}</Col>
                            </Row>)
=======
                        result.part_1.map((item, i) => <Row key={Date.now() + Math.random()} className="border-bottom border-top ms-0">
                            <Col className="text-center border-end p-1"> {i + 1}</Col>
                            <Col  className=" border-end"> {item.name}</Col>
                            <Col  className="text-center border-end"> {item.FA}</Col>
                            <Col className="text-center border-end" > {item.Oral1}</Col>
                            <Col className="text-center border-end"> {item.BA}</Col>
                            <Col className="text-center border-end"> {item.Oral2}</Col>
                            <Col className="text-center border-end"> {item.Overall}</Col>
                        </Row>)
>>>>>>> b497c228e0636dd395bf9f995ee4a03cafc47fad
                        }
                        <Row className=' ms-0 border-bottom'>
                            <Col md={7} className="border-end text-center m-0 ">
                                GRAND TOTAL
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row className=' ms-0 border-bottom'>
                            <Col md={7} className="border-end text-center m-0 ">
                                PERCENTAGE
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Col>


                    {/* Part-2 */}
                    <Col >
                        <Row className='border-bottom me-0'>
                            <Col className='text-center '> Part2</Col>
                        </Row>
                        <Row className='border-bottom me-0'>
                            <Col md={8} sm={8} xs={8} className="border-end p-4 "></Col>
                            <Col md={4} sm={4} xs={4}> Grade</Col>
                        </Row>
                        {
                            result.part_2.map((item, i) => <Row key={Math.random() + Date.now()} className='border-bottom me-0 '>
                                <Col md={8} sm={8} xs={8} className="pt-2 pb-2">{item.department}</Col>
                                <Col md={4} sm={4} xs={4} className="text-center border-start pt-2 pb-2">{item.grade}</Col>
                            </Row>)

                        }


                    </Col>
                </Row>
            </Container>
        </>


    )
}

export default Tablecmpt