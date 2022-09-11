import React from 'react'
// import "./table.css"
import { Container, Row, Col } from 'react-bootstrap';
import Part2 from './Part2';
import Part1 from './Part1';
import Part3 from './Part3';


const Tablecmpt = () => {
    return (

        <Container className='border border-secondary '>
            <Row className='border-bottom border-secondary '>
                <Col className='text-center '  >
                    <p className="clrRed fs-3 fw-3  text-center text-danger"  >  First Terminal Examination 2018-2019</p>
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
            <Part3/>
        </Container>
    )
}



export default Tablecmpt