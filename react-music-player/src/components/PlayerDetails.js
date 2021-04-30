import React from 'react'

function PlayerDetails(props) {
    return (
        <div className='player-details'>
            <div>
                <img src={props.song.img_src} alt="" />
            </div>
            <h3 className='details-title'>{props.song.title}</h3>
            <h4 className='details-artist'>{props.song.artist}</h4>
        </div>
    )
}

export default PlayerDetails
