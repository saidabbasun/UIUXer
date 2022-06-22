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
            
        </div>

        <div className="img"><img src={img} alt="" /></div>
      </Card.ImgOverlay>
    </Card>
  
    </div>
  )
}

export default getStart