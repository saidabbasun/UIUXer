import React from 'react'
import '../../Stayls/Home/footer.scss'
import ArrowTop from '../../assets/icons/ArrowTop.svg'
import smaill1 from '../../assets/icons/IMAGE-1.svg'
import smaill2 from '../../assets/icons/IMAGE-3.svg'
const footer = () => {
  return (
    <div className='footer'>
               <div className="wrap">
          <svg viewBox="0 0 100 100" width="300" height="300"className='cricleText footerCricle'>
  <defs>
    <path id="circle"
      d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
  </defs>
  <text font-size="10" fontWeight={600}>
    <textPath xlinkHref="#circle">
    Touch  ⭐ thanks for  scrollingiget in
    </textPath>
  </text>
  
</svg>
<a href="#"  className='ArrowBottom'>
<img src={ArrowTop} alt="" />
</a>

</div>
<div className="slide">
    <div className="element">
  <img src={smaill1} alt="" />
  <p className="sliderText">Available for Work</p>
    </div>
    <div className="element">
  <img src={smaill2} alt="" />
  <p className="sliderText">Get in Touch</p>
    </div>
    <div className="element">
  <img src={smaill1} alt="" />
  <p className="sliderText">Available Work</p>
    </div>
    <div className="element">
  <img src={smaill2} alt="" />
  <p className="sliderText">Get in Touch</p>
    </div>
    <div className="element">
  <img src={smaill1} alt="" />
  <p className="sliderText">Available for Work</p>
    </div>
    <div className="element">
  <img src={smaill2} alt="" />
  <p className="sliderText">Available for Work</p>
    </div>
</div>
<div className="footerLink">
    <ul>
        <li></li>
    </ul>

</div>
    </div>
  )
}

export default footer