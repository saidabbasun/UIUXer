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
        <svg viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <path id="circle"
      d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
  </defs>
  <text font-size="17">
    <textPath xlinkHref="#circle">
   Work im scroll down to see our latest 
    </textPath>
  </text>
</svg>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Home