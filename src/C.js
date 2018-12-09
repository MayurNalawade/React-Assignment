import React, { Component } from 'react'


class C extends Component{
    render(){
        return(<div style={{ color:this.props.color }}>C Div</div>)
    }
}

export default C