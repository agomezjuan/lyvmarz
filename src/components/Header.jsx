import React from 'react'
// import logo from '../img/logo-lyvmarz.png'
import '../sass/header.sass'

const Header = () => {
  const social = [
    {
      network: 'Facebook', 
      url: 'https://www.facebook.com/LYV-MARZ-2036964496563965', 
      icon: 'fa fa-facebook-official fa-2x'
    },
    {
      network: 'Instagram', 
      url: 'https://www.instagram.com/lyvmarz',
      icon: 'fa fa-instagram fa-2x'
    },
    {
      network: 'YouTube', 
      url: 'https://www.youtube.com/channel/UCVkIi54yc1mnI5fLqS-8q5A?view_as=subscriber',
      icon: 'fa fa-youtube-play fa-2x'
    },
    {
      network: 'Spotify', 
      url: 'https://open.spotify.com/artist/41uR3la6YoHwJ6jlvBzHRt',
      icon: 'fa fa-spotify fa-2x'
    },
    {
      network: 'Apple Music',
      url: 'https://music.apple.com/gb/album/skin-and-bones-single/1473348222?ign-mpt=uo%3D4',
      icon: 'fa fa-music fa-2x'},
  ]

  const SocialLinks = ({url, icon}) => (<li><a href={url}><i className={icon}></i></a></li>)

  return (
    <header id='inicio'>
      <nav className='menu'>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#video">Videos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    <div className="logo">
      <span className="logo-text"> Lyv Marz</span>
    </div>
      <ul className="social">
        {
          social.map((item, index) => {
            return <SocialLinks key={index} url={item.url} icon={item.icon} /> 
          })
        }
      </ul>
  </header>
  )
}

export default Header;