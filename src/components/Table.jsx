import React from 'react'
import "./table.css"
import { Table, Container, Row, Col } from 'react-bootstrap';

const data =[{top:"FA",btm:"20"},{top:"Oral",btm:"10"},{top:"BA",btm:"70"},{top:"Oral",btm:80},{top:"Oeverall",btm:100}]
// const data =[{FA:20},{Oral:20}]

const Tablecmpt = () => {
    return (
        <>
            {/* <Container className="flex justify-content-center"> */}
            <Container className="mt-3 border ">
                <Row>
                    <Col className="text-center">
                        <h3 className='border'>
                            First Terminal Examination 2018-2019
                        </h3>
                        <h3 className='border'>
                            ACADEMIC PERFORMANCE
                        </h3>
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
                </Row>

            </Container></>
    )
}

export default Tablecmpt