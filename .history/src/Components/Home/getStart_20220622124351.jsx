import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Footer from '../../assets/images/bgFooterTop.png'
import '../../Stayls/Home/getStart.scss';
const getStart = () => {
  return (
    <div className='getStart'>
           <Card className="bg-white border-0 getStartCard text-white " >
    <Card.Img src={Footer} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='title'>Ready to get start <br/>with UIUXer?</Card.Title>
        <Card.Text className='text'>
        Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.
        </Card.Text>
        <Button variant="primary" className='homeBtn'>Buy Template</Button>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default getStart