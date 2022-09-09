import React from 'react'
// import "./table.css"
// import showData from "../data/file.json"
import result from "../data/result.json"
import { Table, Container, Row, Col, Stack } from 'react-bootstrap';

const data = [{ top: "FA", btm: "20" }, { top: "Oral", btm: "10" }, { top: "BA", btm: "70" }, { top: "Oral", btm: 80 }, { top: "Overall", btm: 100 }]
// const data =[{FA:20},{Oral:20}]

const Tablecmpt = () => {
    return (
        <>
            {/* <Container className="mt-3 border p-0">

                Heading 
                <Row>
                    <Col className="text-center m-0">
                        <p className="heading border-bottom">
                            First Terminal Examination 2018-2019

                        </p>
                        <p className='heading border-bottom'>
                            ACADEMIC PERFORMANCE
                        </p>
                    </Col>
                </Row>
                <Row className='border'>
                    <Col xs={12} md={8} className="border text-center">
                      Part- 1
                    </Col>
                    <Col xs={6} md={4} className="border text-center">
                      Part- 2
                    </Col>
                </Row>

                <Row className=' border-bottom'>
                    <Col xs={1} >Sr No</Col>
                    <Col xs={2} className="border-start text-center">Subject</Col>
                  {
                    
                    data.map((item,i)=> <Col key={i} xs={1} className='border-end border-start' > 
                    <Row className='text-center '>{item.top}</Row>
                    <Row className='text-center '>{item.btm}</Row>
                    </Col>)
                  }

                  <Col xs={2} className='border-end border-start  '></Col>
                  <Col  className='border-end border-start '>Grade</Col>
                </Row>
                {

                    result.part1.map((item,i)=><Row key={Date.now()+Math.random()} className="border-bottom">
                        <Col xs={1}> {i+1}</Col>
                    </Row>)
                }

                
            </Container> */}


               {/* <Container className="flex justify-content-center"> */}
               <Container className="mt-3 border p-0 ">
                <Row >
                    <Col className='text-center'>
                       <p className="heading border-bottom text mb-0">  First Terminal Examination 2018-2019</p>
                    </Col>  
                </Row>
                <Row>
                    <Col className='text-center'>
                    <p className='heading border-bottom mb-0'> 1ACADEMIC PERFORMANCE</p>
                    </Col>   
                </Row>
                {/* <Row>
                    <Col>
                        <Table striped bordered>
                            <thead>
                                <tr className='text-center'>
                                    <th colSpan={8}>Part-1</th>
                                    <th colSpan={3}>Part-2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center'>
                                    <td >S NO</td>
                                    <td colSpan={2}>SUBJECT</td>
                                    {
                                        data.map((item,i)=> <td key={i}>
                                            <Col >
                                            <Row className='text-center p-1'>
                                                {item.top}
                                            </Row>
                                            <Row className='text-center'>
                                                {item.btm}
                                            </Row>
                                            </Col>
                                        </td>)
                                    }
                                    <td colSpan={2}></td>
                                    <td>a</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row> */}
{/* 
                <Row className='border'>
                    <Col xs={12} md={8} className="border text-center">
                      Part- 1
                    </Col>
                    <Col xs={6} md={4} className="border text-center">
                      Part- 2
                    </Col>
                </Row>

                <Row>
                    <Col xs={1}>Sr No</Col>
                    <Col xs={2} className="border text-center">Subject</Col>
                  {
                    
                    data.map((item,i)=> <Col key={i} xs={1} className='border-end border-start' > 
                    <Row className='text-center border-bottom'>{item.top}</Row>
                    <Row className='text-center border-bottom'>{item.btm}</Row>
                    </Col>)
                  }
                </Row> */}
                <Row >
                    <Col className='border-end' md={8} xs={12}>
                        <Row  className='border-bottom ms-0'>
                            <Col className='text-center '>
                                Part1
                            </Col>
                        </Row>
                        <Row>
                        <Col className='text-center' >SR No</Col>
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

                        result.part_1.map((item, i) => <Row key={Date.now() + Math.random()} className="border-bottom border-top ms-0">
                            <Col md={1} className="text-center border-end p-1"> {i + 1}</Col>
                            <Col md={6} className=" border-end"> {item.name}</Col>
                            <Col  className="text-center border-end"> {item.FA}</Col>
                            <Col className="text-center border-end" > {item.Oral1}</Col>
                            <Col className="text-center border-end"> {item.BA}</Col>
                            <Col className="text-center border-end"> {item.Oral2}</Col>
                            <Col className="text-center border-end"> {item.Overall}</Col>
                        </Row>)
                        }
                    </Col>


{/* Part-2 */}
                    <Col>
                        <Row className='border-bottom me-0'>
                            <Col className='text-center '> Part2</Col>
                        </Row>
                        <Row>
                            <Col md={8} className="border-end "></Col>
                            <Col md={4}> Grade</Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
            </>
    
            
    )
}

export default Tablecmpt