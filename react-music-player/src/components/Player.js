import React from 'react';
import PlayerDetails from './PlayerDetails';

function Player(props) {
    return (
        <div class="player">
            <audio></audio>
            <h4>Playing now</h4>
            
            <PlayerDetails
                song={props.song}
            />

            {/* Controls */}

            <strong>Next up: </strong>

            {props.nextSong.title} by {props.nextSong.artist}
        </div>
    )
}

export default Player
