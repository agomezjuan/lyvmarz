import React from 'react'
import '../sass/banner.sass'
import BannerJumbo from './BannerJumbo'
import animeGirl from '../img/anime-girl.png' 

const Banner = () => {
  const banner = {
    image: animeGirl,
    text: 'Lorem Ipsum',
    url: 'https://onerpm.link/610285357644'
  }
  return (
    <div className='banner'>
        <div className='banner__texture'>
            <div className="banner__content">
                <BannerJumbo props={banner}/>
            </div>
        </div>
    </div>
  )
}

export default Banner