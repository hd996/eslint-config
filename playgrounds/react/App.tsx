import React from 'react'
import ReactDOM from 'react-dom'

const CustomComponent = () => {
  return <div>Custom Component</div>
}

const App = () => {
  return (
    <div>
      <CustomComponent></CustomComponent>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
