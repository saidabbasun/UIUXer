import React from 'react'
import '../../Stayls/Home/customSection.scss';
import Img1 from '../../assets/images/IMAGE-1.png'
const customCard = (this.props.first) => {
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