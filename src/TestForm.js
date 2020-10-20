import React from 'react';
import './App.css';

class TestForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          value: ''
      }
      this.updateData = this.updateData.bind(this);
    }
    updateData = (event) => {
        var newValue =  event.target.value;
        this.setState({value: newValue});
        // console.log(newValue);
    }
    sendData = (event) => {
        this.props.functionCall(this.state.value);
    }
  
    render() {
      return ( 
      <form>
        <label>
        User input: 
        <input type = "text" value={this.state.value} onChange = {this.updateData}/>
        </label> 
        <button type="button" onClick={this.sendData.bind(this)}>{this.props.data}</button>
      </form>
      );
    }
}

export default TestForm