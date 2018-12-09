import React, { Component } from 'react'


class DemoBtnForm extends Component{
    render(){
        return(<form  className="FromClass" >
            <input type="button" style={{backgroundColor:this.props.color }} value="Red" onClick={this.props.changeColor.bind(this, "red")}/>
            <input type="button" style={{backgroundColor:this.props.color }} value="Blue" onClick={this.props.changeColor.bind(this, "blue")}/>
        </form>)
    }
}

export default DemoBtnForm