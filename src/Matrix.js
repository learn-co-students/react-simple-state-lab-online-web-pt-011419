import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    debugger
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const vals = []
    const defRows = ["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"]
    for (let i = 0; i < 10; i++){
      vals.push(defRows)
    }
    return vals
  })()
}