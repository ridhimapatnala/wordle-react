import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'; // Make sure this is where styles go

function App() {
  const [solution, setSolution] = useState(null);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      })
      .catch(err => {
        console.error("Failed to fetch solutions:", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>
        Unlimited Wordle{" "}
        <i
          className="fas fa-info-circle info-icon"
          onClick={() => setShowRules(true)}
        ></i>
      </h1>
      <div className="main-section">
        {showRules && (
          <div className="rules-overlay" onClick={() => setShowRules(false)}>
            <div className="rules-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowRules(false)}>
                &times;
              </button>
              <h2>How to Play</h2>
              <p>Guess the 5-letter word in 6 tries</p>
              <p><span className="green">🟩</span> Correct letter in the correct spot</p>
              <p><span className="yellow">🟨</span> Correct letter in the wrong spot</p>
              <p><span className="grey">⬛</span> Letter not in the word</p>
            </div>
          </div>
        )}

        {solution && <Wordle solution={solution} />}
      </div>
    </div>
  );
}

export default App;
