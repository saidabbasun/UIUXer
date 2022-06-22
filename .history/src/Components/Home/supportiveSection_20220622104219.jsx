import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import Col from 'react-bootstrap/Col';
import Img5 from '../../assets/images/IMAGE-5.png'
import Img6 from '../../assets/images/IMAGE-6.png'
import Img7 from '../../assets/images/IMAGE-5.png'
import Img8 from '../../assets/images/IMAGE-6.png'
const supportiveSection = () => {
  return (
    <div>
         <div className='supportiveSection customSection'>
   
   <div className="textWrap">

  
<h2 className='title'>Supportive Pages</h2>
<p className='text'>Feel the feature of creativity with these inner page layouts that perfectly match your site.</p>
</div>
<Row>
   <Col>
   <Card img={Img6} title='About Me'/>
   </Col>
   <Col>
   <Card img={Img5} title='Blog'/>
   </Col>

</Row>
<Row>
   <Col>
   <Card img={Img6} title='About Me'/>
   </Col>
   <Col>
   <Card img={Img5} title='Blog'/>
   </Col>

</Row>

</div>
    </div>
  )
}

export default supportiveSection