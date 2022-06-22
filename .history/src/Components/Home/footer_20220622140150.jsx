import React from 'react'
import '../../Stayls/Home/footer.scss'
import ArrowTop from '../../assets/icons/ArrowTop.svg'
const footer = () => {
  return (
    <div className='footer'>
               <div className="wrap">
          <svg viewBox="0 0 100 100" width="300" height="300"className='cricleText footerC'>
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
    </div>
  )
}

export default footer