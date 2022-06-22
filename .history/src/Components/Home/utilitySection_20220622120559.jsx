import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import Col from 'react-bootstrap/Col';
import Img8 from '../../assets/images/IMAGE-8.png'
import Img9 from '../../assets/images/IMAGE-9.png'
import Img11 from '../../assets/images/IMAGE-11.png'
import Img12 from '../../assets/images/IMAGE-12.png'
import Img10 from '../../assets/images/IMAGE-10.png'
import '../../Stayls/Home/utilitySection.scss'
const utilitySection = () => {
  return (
    <div>
          <div className='utilitySection customSection'>
   
   <div className="textWrap">

  
<h2 className='title'>Utility Pages</h2>
<p className='text'>Default templates for your site & you can customize these pages to look the way you want.</p>
</div>
<div className="utilityImgWrap">
<Row>
   <Col>
   <Card img={Img8} title='Changelog'/>
   </Col>
   <Col>
   <Card img={Img11} title='Protected Page'/>
   </Col>


</Row>
<Row>
   <Col>
   <Card img={Img9} title='CLicenses'/>
   </Col>
   <Col>
   <Card img={Img12} title='Style Guide'/>
   </Col>


</Row>
<Row>
   <Col>
   <Card img={Img10} title='404 Error Page'/>
   </Col>
   <Col>
   
   </Col>


</Row>
</div>
</div>
    </div>
  )
}

export default utilitySection