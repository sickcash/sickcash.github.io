import './App.css';
import music from './mixdown_1.mp3'
import './musicScript'

function App() {
  return (
    <div className="mainContainer">
      <h1><span id="Logo"><span id="logoRed">sick</span><span id="logoWhite">.</span><span id="logoGreen">cash</span></span></h1>
      <h2>Coming Soon...</h2>
      <audio id="mixdown" autoplay loop><source src={music}/></audio>
    </div>
  );
  }

export default App;
