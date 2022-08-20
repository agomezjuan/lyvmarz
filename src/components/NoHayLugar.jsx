import React from 'react'
import '../sass/nohaylugar.sass'
import lyvSkater from '../img/lyv-skater.png'
import resorte from '../img/resorte.png'
import rayas from '../img/rayas.png'
import scratch from '../img/scratch.png'
import cassette from '../img/casette.png'
import papel from '../img/papel.png'


const NoHayLugar = () => {


  return (
    <section className='nohaylugar' id='NoHayLugar'>
        <div className='nohaylugar__figures'>
            <img src={rayas} alt="" className='rayas' data-aos="zoom-in-left" data-aos-delay="50"/>
            <img src={resorte} alt="" className='resorte' data-aos="zoom-out-right" />
            <img src={scratch} alt="" className='scratch' data-aos="zoom-out-up" />
        </div>
        <div className='nohaylugar__text'>
            <h2 className='nohaylugar__title' data-aos="fade-up" data-aos-delay="50">No hay lugar</h2>
            <div className='nohaylugar__description' data-aos="flip-left" data-aos-delay="50">
              <img src={papel} alt="" />
              <p>Ordena aquí <br />tu cassette</p>
            </div>
        </div>
        <div className='nohaylugar__image'>
            <img src={lyvSkater} alt="" data-aos="fade-up"/>
            <img src={cassette} alt="" className='cassette' data-aos="fade-up"/>
        </div>
    </section>
  )
}

export default NoHayLugar