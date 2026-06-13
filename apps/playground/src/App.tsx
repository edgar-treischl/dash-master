import { useState } from 'react'
import { BarPlot } from 'dash-ui'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Sample data for BarPlot visualization
  const sampleData = [
    { type: 'GS' as const, count: 150, percent: 45.2 },
    { type: 'MS' as const, count: 120, percent: 38.7 },
    { type: 'RS' as const, count: 89, percent: 28.5 },
    { type: 'GY' as const, count: 95, percent: 55.3 },
    { type: 'IGS' as const, count: 72, percent: 42.1 },
  ]

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Dash UI Components</h1>
          <p>
            Testing library components in the playground
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="components">
        <div>
          <h2>BarPlot Component</h2>
          <p>School retention data by type (2024/25 school year)</p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <BarPlot data={sampleData} year="2024/25" />
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
