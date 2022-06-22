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
  
        <Col>
          <Card>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default customSection