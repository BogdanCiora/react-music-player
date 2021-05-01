import React from 'react';
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {
    return (
        <div class="player">
            <audio></audio>
            <h4>Playing now</h4>
            
            <PlayerDetails
                song={props.song}
            />

            <PlayerControls  />

            <p>
                <strong>Next up: </strong>

                {props.nextSong.title} by {props.nextSong.artist}
            </p>
        
        </div>
    )
}

export default Player
