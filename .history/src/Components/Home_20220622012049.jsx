import React from 'react'
import Card from 'react-bootstrap/Card';
import bgHome from '../assets/images/bghome.png'
const Home = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={bgHome} alt="Card image" />
      <Card.ImgOverlay style={{padding:'110px 150px'}}>
        <Card.Title>Tell your creativity to the world with <span className='logoText'>UIUXer</span></Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Home