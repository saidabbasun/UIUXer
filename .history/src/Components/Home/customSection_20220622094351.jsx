import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Img1 from '../../assets/images/IMAGE-1.png'
import '../../Stayls/Home/customSection.scss';
const customSection = () => {
  return (
    <div className='customSection'>
        <div className="textWrap">

       
   <h2 className='title'>Professional Home Pages</h2>
   <p className='text'>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
    </div>
    {/* <Row>
    <Col>
    <div className="customCard">
        
    <img src={Img1} alt="img" />
        </div>
        </Col>
    <Col>2 of 2</Col>
  </Row> */}
   <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default customSection