import React from 'react'
import ReactPlayer from 'react-player'
import "./responsive-player.css"


const ResponsivePlayer = ({url}) => {
   
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='960px'
            height='540px'
            controls={true}
            volume='1'
            playing={true}
           />
        </div>
      )
    
 }
 export default ResponsivePlayer