class Child extends React.Component {
  constructor () {
    super()
    throw new Error('Such Error! Much Breakage! Wow!')
  }
  render () {
    return (
      <div>
        <h3>Child</h3>
      </div>
    )
  }
}

const Parent = () => (
  <div>
    <h1>Parent</h1>
    <Child />
  </div>
)

class App extends React.Component {
  render () {
    return (
      <div className='App'>      
        <Parent />
      </div>    
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))