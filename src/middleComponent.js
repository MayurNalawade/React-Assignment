import React, { Component } from 'react'
import DemoBtnForm  from './Form';

class A extends Component{
    render(){
      return(
        <div className="FormClass">A Div
          <DemoBtnForm color={this.props.color} changeColor={this.props.parentColor.bind(this)} />
        </div>
      )
    }
  }

export default A;