import React, { Component } from 'react';
import '../css/Block.css';

class ActiveList extends Component {
  constructor(props) {
    super(props);
  }

  chageActive = () => {
    this.props.changeActiveFrame()
  }
  render() {
    return (
      <div className='active'>
        <div className='Paragraph active'>
            <h1>{this.props.currentTitle}</h1>
            <p>{this.props.currentText}</p>
            <div className='closeActive' onClick={this.chageActive}>X</div>
        </div>
      </div>
    );
  }
}

export default ActiveList;