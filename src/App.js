import {Table,Container} from 'react-bootstrap';
function App() {
  return (
    <Container class="d-flex justify-content-center">
    <Table striped bordered className='m-3'>
    <thead>
      <tr className='text-center'>
        <th colSpan={2}>First Terminal Examination 2018-2019</th>
        
      </tr>
    </thead>
    <tbody>
      <tr className='text-center'>
        <td colSpan={2}>ACADEMIC PERFORMANCE</td>
      </tr>
      <tr className='text-center'>
        <td >Part-1</td>
        <td >Part-2</td>
      </tr>
      <tr>
        {/* <td>1</td> */}
        <td>Mark</td>
        <td>Otto</td>
        {/* <td>@mdo</td> */}
      </tr>
      <tr>
        {/* <td>2</td> */}
        <td>Jacob</td>
        <td>Thornton</td>
        {/* <td>@fat</td> */}
      </tr>
      <tr>
        {/* <td>3</td> */}
        <td >Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  </Container>
  );
}

export default App;
