import React from 'react'

const BannerJumbo = ({props}) => {
  return (
    <div className='banner__jumbo' data-aos="flip-up">
        <div className="banner__jumbo-button">
            <a href={props.url}>- Basic - <br /> <span>Pre Guarda</span></a>
        </div>
        <div className="banner__jumbo-image">
            <div className="banner__jumbo-frame"></div>
            <img src={props.image} alt="" />
        </div>
    </div>
  )
}

export default BannerJumbo