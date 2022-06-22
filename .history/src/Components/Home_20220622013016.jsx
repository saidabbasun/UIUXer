import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from 'react-bootstrap/Card';
import bgHome from '../assets/images/bghome.png';
import '../Stayls/Home.scss'
const Home = () => {
  return (
    <Card className="text-white">
      <Card.Img src={bgHome} alt="Card image" />
      <Card.ImgOverlay style={{padding:'110px 150px'}}>
        <Card.Title className='title'>Tell your creativity to the world with <span className='logoText'>UIUXer</span></Card.Title>
        <Card.Text className='text'>
        UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.
        </Card.Text>
       
      
        <Button variant="primary">Buy Template</Button>
        <Button variant="primary">Explore Page</Button>
        
      </Card.ImgOverlay>
    </Card>
  )
}

export default Home