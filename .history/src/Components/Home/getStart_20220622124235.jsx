import React from 'react'
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
        <Card.Text cla>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default getStart