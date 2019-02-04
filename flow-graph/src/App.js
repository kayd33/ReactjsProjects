import React, { Component } from 'react'
import './App.css'
import Module from './module'
let data = require("./navigation.json")

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      nums: 0
    }
  }
  componentDidMount(){
    this.setState({ nums: Math.floor(document.body.clientWidth / 200) })
    window.addEventListener('resize', (event) => {
      this.setState({ nums: Math.floor(document.body.clientWidth / 200) })
    })
  }

  render() {
    let tags = data.tags
    let i = -1, j = -1, tId = -1
    
    return (
      <div className="App">
        <div id="data">
          {
            data.modules.map(mod => {
              let tag = tags.filter(ta => ta.id === mod.tagId)
              let onTop = false, breaker = false, joiner = false, neu = false
              if(mod.tagId !== tId){ neu = true; tId = mod.tagId;}
              i++
              j++
              if(data.modules.length - j > this.state.nums - i){
                onTop = true
                if(i === (this.state.nums -1)) breaker = true 
                
              }
              if(i === 0 && j !== 0) joiner = true
              if(breaker) i = -1
              return (<Module key={`${j}`} tag={tag[0]} module={mod} onTop={onTop} breaker={breaker} joiner={joiner} neu={neu}/>)
            })
          }
        </div>
      </div>
    )
  }
}
export default App
