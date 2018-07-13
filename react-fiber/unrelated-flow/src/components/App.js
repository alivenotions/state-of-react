import React from 'react'
import ReactDOM from 'react-dom'

import Tab from './Tab'
import Input from './Input'
import Items from './Items'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAsync: true,
      text: '',
      items: [...new Array(5000)].map((_, i) => ({
        index: i,
        name: `Item: ${i}`,
        value: i,
      })),
    }
  }
  syncUpdate(fn, cb) {
    ReactDOM.flushSync(() => {
      this.setState(fn, cb)
    })
  }
  tick() {
    this.setState(
      state => ({
        items: state.items.map(item =>
          Object.assign({}, item, {
            name: `Item: ${item.value + 1}`,
            value: item.value + 1,
          })
        ),
      }),
      () => {
        this.timerId = setTimeout(() => {
          this.state.isAsync
            ? ReactDOM.unstable_deferredUpdates(() => {
                this.tick()
              })
            : this.tick()
        }, 100)
      }
    )
  }
  componentDidMount() {
    this.tick()
  }
  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
  }
  render() {
    const { isAsync, text, items } = this.state
    return (
      <main>
        <h1 style={{ textTransform: 'uppercase', color: '#bcbcbc' }}>
          My log warehouse
        </h1>
        <Tab
          isAsync={isAsync}
          onClick={value => this.setState(() => ({ isAsync: value, text: '' }))}
        />
        <h3>Rendering a text input as sync priority</h3>
        <Input
          value={text}
          onChange={value => this.syncUpdate(() => ({ text: value }))}
        />
        <h2 style={{ color: 'red' }}>Super heavy magical computation!</h2>
        <h3>
          Rendering {items.length} items as {isAsync ? 'low' : 'sync'} priority
        </h3>
        <Items items={items} />
      </main>
    )
  }
}
