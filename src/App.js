import './App.css';
import music from './assets/music/mixdown_1.mp3'
// import './musicScript'

function App() {
  let audio = new Audio(music);
  const startMusic = () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          console.log("audio played auto");
        })
        .catch(error => {
          console.log("playback prevented");
        });
    }
  }
  return (
    <div className="mainContainer">
      <h1 onClick={startMusic}><span id="Logo"><span id="logoRed">sick</span><span id="logoWhite">.</span><span id="logoGreen">cash</span></span></h1>
      <h2>Coming Soon...</h2>
    </div>
  );
}

export default App;
