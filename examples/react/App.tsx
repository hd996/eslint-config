import React from 'react'
import ReactDOM from 'react-dom'

const Component = () => {
  return <div>Component</div>
}

const App = () => {
  return (
    <div>
      <Component></Component>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
