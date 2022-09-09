<Row >
<Col className='text-center' >
    <p className="clrRed fs-3 fw-3 border-bottom text "  >  First Terminal Examination 2018-2019</p>
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
    <Row className='ms-0'>
        <Col className='text-center' md={1} sm={1} xs={2} >Sr No</Col>
        <Col md={6} sm={3} xs={5} className="border-start text-center">Subject</Col>
        {

            data.map((item, i) => <Col key={i} className='border-end border-start ' md={1} sm={2} xs={1} >
                <Row className=' border-bottom '>
                    <Col className=' text-wrap text-center ' md={1} sm={1} xs={1} >
                        <span>{item.top}</span>
                    </Col>
                </Row>
                <Row className='text-center '>
                    <Col className='text-center ' md={1} sm={1} xs={1}>
                        {item.btm}
                    </Col>
                </Row>
            </Col>)
        }
    </Row>


    {

        result.part_1.map((item, i) => <Row key={Date.now() + Math.random()} className="border-bottom border-top ms-0">
            <Col md={1} sm={1} xs={2} className="text-center border-end "> {i + 1}</Col>
            <Col md={6} sm={3} xs={5} className=" border-end"> {item.name}</Col>
            <Col className="text-center border-end" md={1} sm={1} xs={1}> {item.FA}</Col>
            <Col className="text-center border-end" md={1} sm={1} xs={1} > {item.Oral1}</Col>
            <Col className="text-center border-end" md={1} sm={1} xs={1}> {item.BA}</Col>
            <Col className="text-center border-end" md={1} sm={1} xs={1}> {item.Oral2}</Col>
            <Col className="text-center border-end" md={1} sm={1} xs={1}> {item.Overall}</Col>
        </Row>)
    }
    <Row className=' ms-0 border-bottom'>
        <Col md={7} className="border-end text-center m-0 ">
            GRAND TOTAL
        </Col>
        <Col>
        hey
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