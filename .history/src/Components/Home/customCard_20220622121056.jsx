import React from 'react'
import '../../Stayls/Home/customSection.scss';
import Img1 from '../../assets/images/IMAGE-1.png'
const customCard = (props) => {
  return (
    <div>
       
    <div className="customCard">
        
    <img src={props.img} alt="img" className='customCardImg'/>
        </div>
        <p className={`customCardText}>
       {props.title}
        </p>
     
    </div>
  )
}

export default customCard