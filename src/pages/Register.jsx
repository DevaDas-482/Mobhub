import { Form,  Button} from 'react-bootstrap'
import './Register.css';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

function Register() {

  const [fname, setFname] = useState()
  const [sname, setSname] = useState()
  const [email, setEmail] = useState()
  const [phoneno, setPhoneno] = useState()
  const [password, setPassword] = useState()
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/register' ,{fname, sname, email, phoneno, password})
    .then(result => {console.log(result)
      navigate('./login')
    })
    .catch(err => console.log(err))
  }

 



  return (
    <div className="Form">
        <h1 className='text-primary'>Sign Up</h1>

        <br />
        <br />
    <Form className="shadow p-3 m-2 bg-body rounded"  onSubmit={handleSubmit}>
        <Form.Label className="label">First Name</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="first name" onChange={(e) => setFname(e.target.value)}  /> 
        
      </Form.Group>
        <Form.Label className="label">Second Name</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="second name"  onChange={(e) => setSname(e.target.value)}  /> 
        
      </Form.Group>
        <Form.Label className="label">Email</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}   /> 
        
      </Form.Group>
      
        <Form.Label className="label">Phone Number</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="phone number" onChange={(e) => setPhoneno(e.target.value)}   /> 
        
      </Form.Group>
      <Form.Label className="label">Password</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}    /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>

      <br /> <br />

      <h6 className='text-black'>Already Have an Account ? </h6>

      <br />

      <Button variant="success" type="submit">
        Login
      </Button>
    </Form>
    </div>
  );
}

export default Register;