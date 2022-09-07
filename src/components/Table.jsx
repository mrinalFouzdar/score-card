import React from 'react'
import "./table.css"
import { Table, Container, Row, Col } from 'react-bootstrap';

const Tablecmpt = () => {
    return (
        <>
            {/* <Container className="flex justify-content-center"> */}
            <Container className="mt-3">
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
                <Row>
                    <Col>
                        <Table striped bordered>
                            <thead>
                                <tr className='text-center'>
                                    <th colSpan={8}>Part-1</th>
                                    <th colSpan={3}>Part-2</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td >S NO</td>
                                    <td colSpan={2}>SUBJECT</td>
                                    <td >a</td>
                                    <td >B</td>
                                    <td >C</td>
                                    <td >D</td>
                                    <td >E</td>
                                    <td colSpan={2}></td>
                                    <td>a</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container></>
    )
}

export default Tablecmpt