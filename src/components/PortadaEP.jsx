import React, { useEffect, useRef } from 'react'
import portada from '../img/EP-PORTADA.png'
import styled from 'styled-components'
import ModalVideo from './ModalVideo'
import '../sass/portadaep.sass'


const StyledImg = styled.img`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(16px 16px 10px rgba(0, 0, 0, 0.5));
        transform: rotate(2deg);
        transform-origin: right bottom;
    }
  `
function useKey(key, callback) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    function onKeyUp(event) {
      if (event.code === key) {
        callback(event);
      }
    }
    document.addEventListener('keyup', onKeyUp);
    return () => document.removeEventListener('keyup', onKeyUp);
  }, [key])
}

const PortadaEP = () => {
  const [show, setShow] = React.useState(false)
  const handleEsc = () => setShow(false)

  useKey('Escape', handleEsc)

  const handleClick = () => {
    setShow(prev => !prev)
  }

  return (
    <div className='portadaep'>
        <ModalVideo show={show} setShow={setShow} onKeyUp={handleClick} />
        <a href="https://distrokid.com/hyperfollow/lyvmarz/no-hay-lugar-2">
        <StyledImg src={portada} alt="" data-aos="zoom-out-up" /></a>
    </div>
  )
}

export default PortadaEP