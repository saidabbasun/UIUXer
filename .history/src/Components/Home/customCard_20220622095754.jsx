import React from 'react'
import '../../Stayls/Home/';
import Img1 from '../../assets/images/IMAGE-1.png'
const customCard = () => {
  return (
    <div>
       
    <div className="customCard">
        
    <img src={Img1} alt="img" className='customCardImg'/>
        </div>
        <p className="customCardText">
        Home UX Designer
        </p>
     
    </div>
  )
}

export default customCard