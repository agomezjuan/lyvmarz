import React from 'react'
import styled from 'styled-components'


const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 3;

`
const YouTubeFrame = styled.iframe`
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    width: 100%;
    max-width: 900px;
    height: 100%;
    max-height: 506px;
    border: 0;
    border-radius: 1.5rem;
`
const Video = () => {
return (
   <YouTubeFrame src="https://www.youtube.com/embed/z2Ms4Pb6ChA?autoplay=1;start=2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YouTubeFrame>
    )
}

const ModalVideo = ({show, setShow}) => {
  return (
    <>
    {show ? <Modal onClick={() => setShow(!show)}><Video /></Modal> : null}
    </>
  )
}

export default ModalVideo