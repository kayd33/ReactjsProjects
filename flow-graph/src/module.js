import React, { Component } from  'react'
import colorString from 'color-string'

class Module extends Component{

  constructor(props){
    super(props)
    this.state = {
      tag: this.props.tag || {},
      module: this.props.module || []
    }
  }
  render(){
    let color = colorString.get.rgb(this.state.tag.color)
    let halfOp
    if(color){
      console.log(this.state)
      halfOp = [...color.slice(0, 3), 0.3]
      color = `rgb(${color.join(',')})`
      halfOp = `rgb(${halfOp.join(',')})`
    }

    return(
      <div style={{display: 'inline-block', height: '200px', width: '200px', background: halfOp || 'white'}}>
        <h5 style={{height: '80px', width: '100%', margin: 0, paddingTop: '10px'}}>{this.props.neu ? this.state.tag.name : ''}</h5>
        <p style={{fontSize: '0.88em', height: '50px', margin: '0'}}>{this.state.module.name}</p>
        <svg height="200" width="200" style={{position: 'relative', 'top': '-130px', left: '0', fill: color || 'black', stroke: color || 'black'}}>
          <line x1="0" y1="155" x2="200" y2="155" strokeWidth="3" />
          {this.props.onTop ? <line x1="0" y1="198" x2="200" y2="198" strokeWidth="3" /> : ''}
          {this.props.breaker ? <line x1="198" y1="155" x2="198" y2="200" strokeWidth="3" /> : ''}
          {this.props.joiner ? <line x1="2" y1="0" x2="2" y2="155" strokeWidth="3" /> : ''}
          <circle cx="100" cy="155" r="15"></circle>
          <circle cx="100" cy="155" r="11" fill="white"></circle>
        </svg>
      </div>
    )
  }
}
export default Module