import React from 'react'
import '../../Stayls/Home/supportiveSection.scss'
const supportiveSection = () => {
  return (
    <div className='supportiveSection customSection'>
   
        <div className="textWrap">

       
   <h2 className='title'>Professional Home Pages</h2>
   <p className='text'>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
    </div>
    <Row>
        <Col>
        <Card/>
        </Col>
        <Col>
        <Card/>
        </Col>
  
   
  </Row>
   
    </div>
  )
  
}

export default supportiveSection