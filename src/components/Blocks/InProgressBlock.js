import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import '../css/Block.css';

class InProgressBlock extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		content: this.props.content,
		dropList: this.props.dropList,
		isHiddenDrop: true,
		addButtonClass: 'addButton',
		buttonText: '+Add Card',
		inputValue: ''
	};

	onClickHandler = () => {
		const { isHiddenDrop, inputValue, content } = this.state;
		if (inputValue) {
			const nextState = [...content, { name: inputValue }];
			this.setState({ content: nextState, inputValue: '', buttonText: '+Add Card' });
			this.props.updateOwnData(nextState);
		}
		isHiddenDrop
			? this.setState({ isHiddenDrop: !isHiddenDrop, buttonText: 'Submit', addButtonClass: 'addButton submit' })
			: this.setState({ isHiddenDrop: !isHiddenDrop, buttonText: '+Add Card', addButtonClass: 'addButton' });
	};

	onHandleChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	clickDroppedItem(element) {
		const newDropList = this.props.dropList;
		const index = newDropList.indexOf(element);
		const newContent = [...this.props.content, element];
		newDropList.splice(index, 1);
		this.setState({ dropList: newDropList, content: newContent });
		this.props.updateData(newDropList);
		this.props.updateOwnData(newContent);
	}

	handleItemClick(title, text) {
		this.props.changeActiveFrame(true, title, text);
	}

	render() {
		const { isHiddenDrop, buttonText, addButtonClass, content, inputValue } = this.state;

		const drop = this.props.dropList.map((el, i) => (
			<Dropdown.Item key={i} className="dropdownItem" onClick={() => this.clickDroppedItem(el)}>
				{el.name}
			</Dropdown.Item>
		));
		const List = content.map((item, i) => (
			<li onClick={(e) => this.handleItemClick(item.name, item.text)} className="Paragraph" key={i}>
				{item.name}
			</li>
		));
		return (
			<div className="Block">
				<div>In Progress</div>
				<ul>{List}</ul>
				{isHiddenDrop ? (
					this.props.dropList.length !== 0 ? (
						<DropdownButton id="dropdown-basic-button" title="Select Card...">
							{drop}
						</DropdownButton>
					) : null
				) : (
					<input
						className="Paragraph colored"
						type="text"
						value={inputValue}
						onChange={this.onHandleChange}
					/>
				)}
				<input className={addButtonClass} type="button" value={buttonText} onClick={this.onClickHandler} />
			</div>
		);
	}
}

export default InProgressBlock;
