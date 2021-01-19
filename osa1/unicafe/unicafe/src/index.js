import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
 return (
   <>
  <p>good {good}</p>
  <p>neutral {neutral}</p>
  <p>bad {bad}</p>
  <p>all {good+neutral+bad}</p>
  <p>average {(good-bad)/(good+neutral+bad) || 0}</p>
  <p>positive {100*good/(good+neutral+bad) || 0} %</p>
  </>
 )
}

const Button = (props) => {
  const { onClick, text } = props
  return (
  <button onClick={onClick}>
    {text}
  </button>
  )
  }

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
