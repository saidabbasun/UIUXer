import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from 'react-bootstrap/Card';
import bgHome from '../assets/images/bghome.png';
import Star from '../assets/icons/Star.svg'
import '../Stayls/Home.scss'
const Home = () => {
  return (
    <Card className="text-black homeCard text-center">
      <Card.Img src={bgHome} alt="Card image" />
      <Card.ImgOverlay className='cardImgOverlay' >
        <Card.Title className='title text-end'>Tell your creativity to the   world with <span className='logoText'>UIUXer</span></Card.Title>
        <Card.Text className='text'>
        UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.
        </Card.Text>
       
      
        <Button variant="primary" className='homeBtn'>Buy Template</Button>
        <Button variant="primary" className=' homeBtn homeBtn2'>Explore Page</Button>
        <div className="wrap">
          <svg viewBox="0 0 100 100" width="300" height="0"className='cricleText'>
  <defs>
    <path id="circle"
      d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
  </defs>
  <text font-size="10" textA='center'>
    <textPath xlinkHref="#circle">
    Work  ⭐ scroll down to see our latest 
    </textPath>
  </text>
  
</svg>
<img src={Star} alt="" />
</div>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Home