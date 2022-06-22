import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import '../../Stayls/Home/getStart.scss';
import img from '../../assets/images/IMAGE-13.png'
const getStart = () => {
  return (
    <div className='getStart'>
           <div className="bg-white  getStartCard " >

      <div className='imgOverlay'>
        <div className="left">
        <Card.Title className='title'>Ready to get start <br/>with UIUXer?</Card.Title>
        <Card.Text className='text'>
        Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.
        </Card.Text>
        <Button variant="primary" className='getStartBtn'>Get Start Now</Button> 
        </div>
       
         <img className='right' src={img} alt="" />
        
       
      </div>
    </div>
  
    </div>
  )
}

export default getStart