import React from 'react';
import './App.css';

class Graph extends React.Component {

    // constructor(props) {
    //   super(props);
    // //   this.state = {date: new Date()};
    // }
  
    render() {
      return ( 
      <p>{this.props.data}</p>
      );
    }
}

export default Graph