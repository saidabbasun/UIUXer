import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import Col from 'react-bootstrap/Col';
import Img9 from '../../assets/images/IMAGE-9.png'
import Img10 from '../../assets/images/IMAGE-10.png'
import Img11 from '../../assets/images/IMAGE-11.png'
import Img12 from '../../assets/images/IMAGE-12.png'
const utilitySection = () => {
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

export default utilitySection