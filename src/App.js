import './App.css';
import music from './assets/music/mixdown_1.mp3'
// import './musicScript'
import Particles from "react-tsparticles";

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
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 120,
          background: {
            color: {
              value: "#403d3c",
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          fullScreen: {
            zIndex: -1,
          },
          particles: {
            move: {
              enable: true,
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              direction: "bottom",
              angle: 20,
            },
            number: {
              density: {
                enable: true,
              },
              value: 15,
            },
            rotate: {
              random: {
                enable: true,
              },
              animation: {
                enable: true,
                speed: 1,
              },
              direction: "random",
            },
            color: {
              value: "#ffffff",
            },
            opacity: {
              anim: { enable: true, opacity_min: 0.1, speed: 0.1, sync: true },
              random: false,
              value: 0.5,
            },
            shape: {
              options: {
                char: {
                  fill: true,
                  font: "Font Awesome 5 Free",
                  value: [
                    "\uf1fe", //chart-area
                    "\uf080", //chart-bar
                    "\uf201", //chart-line-up
                  ],
                  weight: "900",
                },
              },
              type: "char",
            },
            size: {
              value: 32,
            },
          },
        }}
      />
      <h1 onClick={startMusic}><span id="Logo"><span id="logoRed">sick</span><span id="logoWhite">.</span><span id="logoGreen">cash</span></span></h1>
      <h2>Coming Soon...</h2>
    </div>
  );
}

export default App;
