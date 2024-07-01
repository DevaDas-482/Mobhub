import { Form,  Button} from 'react-bootstrap'
import './Login.css';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function Login() {

      const [email, setEmail] = useState()
      const [password, setPassword] = useState()
      const navigate = useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/login' ,{email, password})
        .then(result => {
          console.log(result)
          if(result.data === "Success") {
            navigate('./homepage')
          } 
        })
        .catch(err => console.log(err))
      }
  
  

  return (
    <div className="Form">
        <h1 className='text-primary'>Login</h1>

        <br />
        <br />
    <Form className="shadow p-3 m-2 bg-body rounded" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder=" Email" onChange={(e) => setEmail(e.target.value)}  /> 
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit" >
        Login
      </Button>
    </Form>
    </div>
  );
}

export default Login;