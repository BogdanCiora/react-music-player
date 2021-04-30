import {useState} from 'react';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState([
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
      title: "Money",
      artist: "Pink Floyd",
      img_src: "./images/PinkFloyd.jpg",
      src: "./music/Money.mp3"
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

  return (
    <div className="App">
      <Player 
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
