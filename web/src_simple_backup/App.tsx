
import { useState } from "react";
import "./style.css";

export default function App() {
  const [altitude, setAltitude] = useState(400);
  const [inclination, setInclination] = useState(51.6);
  const [result, setResult] = useState(false);

  const earthRadius = 6371;
  const earthMu = 398600.4418;

  const radius = earthRadius + altitude;
  const period = 2 * Math.PI * Math.sqrt(
    Math.pow(radius, 3) / earthMu
  );
  const periodMinutes = period / 60;

  function simulate() {
    setResult(true);
  }

  return (
    <main className="app">
      <header className="navbar">
        <div className="brand">
          <span className="brand-icon">◉</span>
          ORBIT<span className="muted">LAB</span>
        </div>
        <div className="nav-status">
          <span className="status-dot" />
          EXPERIMENTAL BUILD 0.1
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow">SPACE GARAGE / INITIAL CONCEPT</div>
        <h1>Explore the mechanics<br />of <span>orbit.</span></h1>
        <p>
          An early experimental workspace for exploring orbital
          parameters and visualising basic satellite trajectories.
        </p>
      </section>

      <section className="workspace">
        <div className="panel orbit-panel">
          <div className="panel-heading">
            <div>
              <div className="eyebrow">01 / VISUALISATION</div>
              <h2>Orbital preview</h2>
            </div>
            <span className="tag">CONCEPT</span>
          </div>

          <div className="orbit-scene">
            <div className="orbit-ring orbit-one" />
            <div className="orbit-ring orbit-two" />
            <div className="earth">
              <div className="earth-shine" />
            </div>
            <div
              className="satellite-orbit"
              style={{ transform: `rotate(${inclination}deg)` }}
            >
              <div className="satellite">
                <span />
              </div>
            </div>
            <div className="orbit-label">EARTH / LEO</div>
          </div>

          <div className="scene-footer">
            <span>REFERENCE BODY: EARTH</span>
            <span>NOT TO SCALE</span>
          </div>
        </div>

        <div className="panel controls-panel">
          <div className="eyebrow">02 / PARAMETERS</div>
          <h2>Mission inputs</h2>
          <p className="subtext">
            Adjust the values to explore a basic circular orbit.
          </p>

          <label htmlFor="altitude">Orbital altitude</label>
          <div className="input-wrap">
            <input
              id="altitude"
              type="number"
              min="100"
              max="35000"
              value={altitude}
              onChange={(e) => {
                setAltitude(Number(e.target.value));
                setResult(false);
              }}
            />
            <span>KM</span>
          </div>

          <label htmlFor="inclination">Orbital inclination</label>
          <div className="input-wrap">
            <input
              id="inclination"
              type="number"
              min="0"
              max="180"
              step="0.1"
              value={inclination}
              onChange={(e) => {
                setInclination(Number(e.target.value));
                setResult(false);
              }}
            />
            <span>DEG</span>
          </div>

          <button
            className="simulate-button"
            onClick={simulate}
            disabled={
              altitude < 100 ||
              altitude > 35000 ||
              inclination < 0 ||
              inclination > 180
            }
          >
            Run orbit calculation <span>↗</span>
          </button>

          {result && (
            <div className="result-box">
              <div className="eyebrow">CALCULATION RESULT</div>
              <div className="result-value">
                {periodMinutes.toFixed(2)}
                <span> minutes</span>
              </div>
              <p>Estimated orbital period for a circular orbit.</p>
            </div>
          )}
        </div>
      </section>

      <section className="info-grid">
        <div className="info-card">
          <span className="eyebrow">03 / RESEARCH</span>
          <h3>Mission concepts</h3>
          <p>Explore early ideas for orbital exploration and satellite systems.</p>
          <span className="coming">EARLY DEVELOPMENT</span>
        </div>

        <div className="info-card">
          <span className="eyebrow">04 / AI ASSISTANT</span>
          <h3>Experimental AI</h3>
          <p>A proposed assistant for future mission research and exploration.</p>
          <span className="coming">NOT IMPLEMENTED</span>
        </div>
      </section>

      <footer>
        <span>ORBIT LAB / SPACE GARAGE</span>
        <span>EARLY PROOF OF CONCEPT · 2026</span>
      </footer>
    </main>
  );
}
