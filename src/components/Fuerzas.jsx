import React from 'react'
import rayos from '../img/rayos.png'
import '../sass/fuerzas.sass'

const Fuerzas = () => {
  return (
    <section className='fuerzas'>
        <img src={rayos} alt="" data-aos="zoom-out-up" />
        <p data-aos="zoom-out-up" >Cuando no tengas más fuerzas,<br/> aquí estoy yo con mi música para acompañarte.<br/> TQM<br/></p>
        <p data-aos="zoom-out-up" >att:Lyv</p>
    </section>
  )
}

export default Fuerzas