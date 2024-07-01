import React, { useState } from 'react'
import { Card, Button} from 'react-bootstrap'
import {mobilesData} from "./Homedata"



function Homepage() {

const [items, setItems] = useState(mobilesData)

const decQty = (id) => {
    const newItem = items.map((item) => 
    item.id === id && item.qty > 1 ? {...item, qty:item.qty - 1}:item
)
setItems(newItem)
}


const incQty = (id) => {
    const newItem = items.map((item) => 
    item.id === id ?{...item, qty:item.qty + 1}:item
)
setItems(newItem)
}

  return (
    <>

    

  
    
<br /> 

    {items.map((item) =>(

    <div className='d-inline-flex' key={item.id}>


<Card
className="shadow p-3 m-2 bg-body rounded"
style={{ width: '12rem'}}>
<Card.Img
className='p-2'
style={{ height: '10rem'}}
variant="top" src={require(`./img/${item.image}.png`)}/>
<Card.Body>
  <Card.Title className='text-info'>{item.brand}</Card.Title>
  <Card.Text className='text-info'>
    {item.model}
  </Card.Text>

  <h5>₹ {item.price}</h5>
  <div>
  <p>
      Qty: 
  <Button onClick={() => decQty(item.id)} className='m-1'>-</Button>
  {item.qty}
  <Button onClick={ () => incQty(item.id)} className='m-1'>+</Button>
  </p>
  </div>
  
  <Button variant="primary">Get
    </Button>
 
</Card.Body>
</Card>

</div>
    ) )}
    
    
    </>
  )
}

export default Homepage