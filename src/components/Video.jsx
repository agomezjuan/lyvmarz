import React from 'react'
import styled from 'styled-components'
import '../sass/video.sass'

const VideoFrame = styled.iframe`
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    width: 100%;
    max-width: 900px;
    min-height: 225px;
    height: 100%;
    max-height: 506px;
    border: 0;
    border-radius: 1.5rem;
`

const Video = () => {
  return (
    <div className='video' id='video' data-aos="zoom-out-up">
        <VideoFrame className='video__container' title='YouTube video player' src="https://www.youtube.com/embed/z2Ms4Pb6ChA?autoplay=1;start=2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </VideoFrame>
    </div>
  )
}

export default Video