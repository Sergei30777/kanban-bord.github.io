import React, { Component } from 'react';

import '../css/Block.css';

class BacklogBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: this.props.content,
			inputValue: '',
			isHiddenTextFrame: true,
			buttonText: '+Add Card',
			disabled: false,
			addButtonClass: 'addButton'
		};
	}

	onClickHandler = () => {
		const { inputValue, content, isHiddenTextFrame } = this.state;
		isHiddenTextFrame
			? this.setState({
					isHiddenTextFrame: !isHiddenTextFrame,
					buttonText: 'Submit',
					addButtonClass: 'addButton submit'
			  })
			: this.setState({
					isHiddenTextFrame: !isHiddenTextFrame,
					buttonText: '+Add Card',
					addButtonClass: 'addButton'
			  });

		if (inputValue) {
			const nextState = [...content, { name: inputValue }];
			this.setState({ content: nextState, inputValue: '', buttonText: '+Add Card' });
			this.props.updateData(nextState);
		}
	};

	onHandleChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	handleItemClick(title, text) {
		this.props.changeActiveFrame(true, title, text);
	}

	render() {
		const { content, inputValue, isHiddenTextFrame, buttonText, addButtonClass } = this.state;

		const ListItem = ({ title, text }) => (
			<li onClick={(e) => this.handleItemClick(title, text)} className="Paragraph">
				{title}
			</li>
		);

		const List = ({ items }) => (
			<ul>
				{items.map((item, i) => (
					<ListItem key={i} title={item.name} text={item.text} />
				))}
			</ul>
		);

		return (
			<div className="Block">
				<div>Backlog</div>
				<List items={content} />
				{isHiddenTextFrame ? null : (
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

export default BacklogBlock;
