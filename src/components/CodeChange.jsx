     {/* Table
                <Stack direction="horizontal" className='flex m-0' >
                    Left Part(Part 1)
                    <Container >
                        <Row>
                            <Col className="border text-center">
                                Part- 1
                            </Col>
                        </Row>
                        <Row className='border-bottom'>
                            <Col className='text-center' md={1}>Sr No</Col>
                            <Col md={5} className="border-start text-center">Subject</Col>
                            {

                                data.map((item, i) => <Col key={i} className='border-end border-start ' >
                                    <Row className='text-center border-bottom'>
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

                            result.part1.map((item, i) => <Row key={Date.now() + Math.random()} className="border-bottom">
                                <Col md={1} className="text-center border-end p-1"> {i + 1}</Col>
                                <Col md={5} className="text-center border-end"> {item.name}</Col>
                                <Col  className="text-center border-end"> {item.FA}</Col>
                                <Col className="text-center border-end" > {item.Oral1}</Col>
                                <Col className="text-center border-end"> {item.BA}</Col>
                                <Col className="text-center border-end"> {item.Oral2}</Col>
                                <Col className="text-center border-end"> {item.Overall}</Col>
                            </Row>)
                        }
                    </Container>





                    Right Part (Part -2
                    <Container>
                        <Row>
                            <Col className="border text-center">
                                Part- 2
                            </Col>
                        </Row>
                        <Row className='border'>

                            <Col md={8} className='border-end border-start'></Col>
                            <Col className='p-2'>Grade</Col>
                        </Row>
                        {
                            result.part2.map((item)=><Row className='border' key={Date.now()+Math.random()}>
                                <Col md={8} className="text-center border-end p-2">{item.department}</Col>
                                <Col>{item.grade}</Col>
                            </Row>)
                        }
                    </Container>

                </Stack> */}