import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Footer from '../../assets/images/bgFooterTop.png'
import '../../Stayls/Home/getStart.scss';
import img from '../../assets/images/IMAGE-13.png'
const getStart = () => {
  return (
    <div className='getStart'>
           <Card className="bg-white border-0 getStartCard text-white " >
    <Card.Img src={Footer} alt="Card image" />
      <Card.ImgOverlay className='imgOverlay'>
        <div className="left">
        <Card.Title className='title'>Ready to get start <br/>with UIUXer?</Card.Title>
        <Card.Text className='text'>
        Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.
        </Card.Text>
        <Button variant="primary" className='homeBtn'>Get Start Now</Button> 
        </div>

        <img className='img' src={img} alt="" />
      </Card.ImgOverlay>
    </Card>
  
    </div>
  )
}

export default getStart