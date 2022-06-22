import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import Col from 'react-bootstrap/Col';
import Img5 from '../../assets/images/IMAGE-5.png'
import Img6 from '../../assets/images/IMAGE-6.png'
const supportiveSection = () => {
  return (
    <div>
         <div className='supportiveSection customSection'>
   
   <div className="textWrap">

  
<h2 className='title'>Supportive Pages</h2>
<p className='text'>Create an optimal visual experience for your users with these inspiring layouts.</p>
</div>
<Row>
   <Col>
   <Card img={Img6} title='Case Study Single - Web'/>
   </Col>
   <Col>
   <Card img={Img5} title='Case Study Single - Mobile'/>
   </Col>


</Row>

</div>
    </div>
  )
}

export default supportiveSection