import React from 'react'
import Col from 'react-bootstrap/Col';


import Img1 from '../../assets/images/IMAGE-1.png'
const customCard = () => {
  return (
    <div>
          <Col>
    <div className="customCard">
        
    <img src={Img1} alt="img" />
        </div>
        <p className="customCardText">
        Home UX Designer
        </p>
        </Col>
    </div>
  )
}

export default customCard