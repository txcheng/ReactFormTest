import React from 'react';
import './App.css';
import TestForm from './TestForm';
import Graph from './Graph';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            data : "Hello",
        }
    }
    buttonText = "Submit";
    updateData = (childData) => {
        console.log(childData);
        this.setState({data: childData});
    };
  
    render() {
      return ( 
        <div>
            <div>
                <TestForm data={this.buttonText} functionCall={this.updateData.bind(this)}></TestForm>
            </div>
            <div>
                <Graph data={this.state.data}></Graph>
            </div>
        </div>
      );
    }
}

export default Home