import React, { Component } from 'react';
import './css/Main.css';

import BacklogBlock from './Blocks/BacklogBlock';
import ReadyBlock from './Blocks/ReadyBlock';
import InProgressBlock from './Blocks/InProgressBlock';
import FinishedBlock from './Blocks/FinishedBlock';
import ActiveList from './Blocks/ActiveList';

class Main extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.updateCountTasks();
	}

	state = {
		BacklogData: [],
		ReadyData: [],
		InProgressData: [],
		FinishedData: [],
		isActiveList: false,
		currentTitle: '',
		currentText: ''
	};

	updateBacklogData = (Data) => {
		this.setState({ BacklogData: Data });
		this.updateBCountTasks(Data.length);
	};

	updateReadyData = (Data) => {
		this.setState({ ReadyData: Data });
	};

	updateInProgress = (Data) => {
		this.setState({ InProgressData: Data });
	};

	updateFinished = (Data) => {
		this.setState({ FinishedData: Data });
		this.updateFCountTasks(Data.length);
	};

	updateCountTasks = () => {
		const { BacklogData, FinishedData } = this.state;
		this.props.updateTasks(BacklogData.length, FinishedData.length);
	};

	updateBCountTasks = (data) => {
		this.props.updateBTasks(data, this.state.FinishedData.length);
	};

	updateFCountTasks = (data) => {
		this.props.updateFTasks(this.state.BacklogData.length, data);
	};

	changeActive = (change, title, text) => {
		this.setState({ isActiveList: change, currentTitle: title, currentText: new Date().toUTCString() });
	};

	render() {
		const { BacklogData, ReadyData, InProgressData, FinishedData, isActiveList } = this.state;
		const allBlocks = (
			<div>
				<BacklogBlock
					content={BacklogData}
					updateData={this.updateBacklogData}
					changeActiveFrame={this.changeActive}
				/>
				<ReadyBlock
					content={ReadyData}
					dropList={BacklogData}
					changeActiveFrame={this.changeActive}
					updateData={this.updateBacklogData}
					updateOwnData={this.updateReadyData}
					changeActiveFrame={this.changeActive}
				/>
				<InProgressBlock
					content={InProgressData}
					dropList={ReadyData}
					changeActiveFrame={this.changeActive}
					updateData={this.updateReadyData}
					updateOwnData={this.updateInProgress}
					changeActiveFrame={this.changeActive}
				/>
				<FinishedBlock
					content={FinishedData}
					dropList={InProgressData}
					changeActiveFrame={this.changeActive}
					updateData={this.updateInProgress}
					updateOwnData={this.updateFinished}
					changeActiveFrame={this.changeActive}
				/>
			</div>
		);
		const activeList = (
			<ActiveList
				changeActiveFrame={this.changeActive}
				currentTitle={this.state.currentTitle}
				currentText={this.state.currentText}
			/>
		);
		return <div className="Main">{isActiveList ? activeList : allBlocks}</div>;
	}
}

export default Main;
