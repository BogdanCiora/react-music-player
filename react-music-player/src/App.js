import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Policy of truth",
      artist: "Depeche Mode",
      img_src: "./images/DepecheMode.png",
      src: "./music/PolicyOfTruth.mp3"
    },
    {
      title: "Always with me, always with you",
      artist: "Joe Satriani",
      img_src: "./images/JoeSatriani.jpg",
      src: "./music/AlwaysWithMeAlwaysWithYou.mp3"
    },
    {
      title: "Where the eagles learn to fly",
      artist: "Pink Cream 69",
      img_src: "./images/PinkCream.jpg",
      src: "./music/WhereTheEaglesLearnToFly.mp3"
    },
    {
      title: "Fool in the rain",
      artist: "Pink Floyd",
      img_src: "./images/PinkFloyd.jpg",
      src: "./music/FoolInTheRain.mp3"
    },
    {
      title: "Another one bites the dust",
      artist: "Queen",
      img_src: "./images/Queen.jpg",
      src: "./music/AnotherOneBitesTheDust.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      // this is for when we're playing the last song
      //this code is going to "loop" you back to the beginning of the playlist
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
    //the line below says that if currentSongIndex changes, then call useEffect
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
