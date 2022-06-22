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
    <textPath xlink:href="#circle">
   Work <svg width="20" height="19" viewBox="0 0 20 19" fill="none" x="http://www.w3.org/2000/svg">
<path d="M10.4071 0.805725L12.8847 6.76401L19.2089 8.08969L14.3165 12.3098L14.9991 18.7197L9.49531 15.3823L3.59959 18.0125L5.09438 11.7404L0.764221 6.95058L7.18622 6.41042L10.4071 0.805725Z" fill="#F3764F"/>
</svg> scroll down to see our latest 
    </textPath>
  </text>
</svg>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Home