import React, {useState, useRef, useEffect} from 'react';
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {

    const audioEl = useRef(null);
    //we don't want the audio player to play when the player is loaded => default value will be false
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    //we'll have one function for back + forward
    //if we're going forward we don't pass anythng
    //if we're going backwads we're passing false
    const SkipSong =  (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                //the looping thing that we do at the end of the playlist
                if(temp > props.songs.length - 1) {
                    temp = 0;
                }
                
                return temp;
            });
        } else {
            props.setCurrentSongIndex (() => {
                let temp = props.currentSongIndex;
                temp--;

                //the loop thing but the other way around
                if(temp < 0){
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div class="player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            
            <PlayerDetails
                song={props.songs[props.currentSongIndex]}
            />

            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
            />

            <p>
                <strong>Next up: </strong>

                {props.songs[props.nextSongIndex].title + " "} 
                by 
                {" " + props.songs[props.nextSongIndex].artist}
            </p>
        
        </div>
    )
}

export default Player
