import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import Col from 'react-bootstrap/Col';
import Img5 from '../../assets/images/IMAGE-3.png'
import Img6 from '../../assets/images/IMAGE-4.png'
const supportiveSection = () => {
  return (
    <div>
         <div className='supportiveSection customSection'>
   
   <div className="textWrap">

  
<h2 className='title'>Stunning Case Studies</h2>
<p className='text'>Create an optimal visual experience for your users with these inspiring layouts.</p>
</div>
<Row>
   <Col>
   <Card img={Img4} title='Case Study Single - Web'/>
   </Col>
   <Col>
   <Card img={Img3} title='Case Study Single - Mobile'/>
   </Col>


</Row>

</div>
    </div>
  )
}

export default supportiveSection