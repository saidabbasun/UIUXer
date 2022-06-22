import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from 'react-bootstrap/Card';

import ArrowBottom from '../../assets/icons/ArrowBottom.svg'
import '../../Stayls/Home/Home.scss'
const Home = () => {
  return (
    <div className="homeCard text-center" id='home'>
     
      <div className='cardImgOverlay' >
        <Card.Title className='title text-end'>Tell your creativity to the   world with <span className='logoText'>UIUXer</span></Card.Title>
        <Card.Text className='text'>
        UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.
        </Card.Text>
       
      
        <Button variant="primary" className='homeBtn'>Buy Template</Button>
        <Button variant="primary" className=' homeBtn homeBtn2'>Explore Page</Button>
        <div className="wrap">
          <svg viewBox="0 0 100 100" width="300" height="300"className='cricleText'>
  <defs>
    <path id="circle"
      d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
  </defs>
  <text fon fontWeight={600}>
    <textPath xlinkHref="#circle">
    Work  ⭐ scroll down to see our latest 
    </textPath>
  </text>
  
</svg>
<a href="#personal"  className='ArrowBottom'>
<img src={ArrowBottom} alt="" />
</a>

</div>
      </div>
    </div>
  )
}

export default Home