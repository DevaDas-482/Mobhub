import React, { useState } from 'react';
import { Container, Form, InputGroup, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { data } from './PhoneData';


function Mobile () {

    const [search, setSearch] = useState('')
    console.log(search)
 
  return (
    <div className='App'>
      <Container>
          <h1 className='text-center mt-4 bg-primary text-white' > Mob Hub </h1> <br />
          <Form>
            <InputGroup classNamemy-3>
                <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search...' className='border-primary'/>

            </InputGroup>
          </Form>
          <br />
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Brand</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

          {data.filter((item) => {
                return search.toLowerCase() 
                === '' ? item : item.brand.toLowerCase().includes(search)
          }).map((item) => (

          <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.brand}</td>
              <td>{item.desc}</td>
              <td>{item.price}</td>

          </tr>
          
          ))}

                
              
          </tbody>


          </Table>
      </Container>

    </div>
  );
}

export default Mobile;