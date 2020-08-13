import React, { Component } from 'react';
import './css/App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		activeTasks: null,
		finishedTasks: null
	};

	updateCurrentTasks = (BacklogCount, FinishedDCount) => {
		this.setState({
			activeTasks: BacklogCount,
			finishedTasks: FinishedDCount
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Main
					updateTasks={this.updateCurrentTasks}
					updateBTasks={this.updateCurrentTasks}
					updateFTasks={this.updateCurrentTasks}
				/>
				<Footer active={this.state.activeTasks} finished={this.state.finishedTasks} />
			</div>
		);
	}
}

export default App;
