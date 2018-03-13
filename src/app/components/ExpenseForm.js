import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			amount: props.expense ? props.expense.amount : '',
			description: props.expense ? props.expense.description :'',
			note: props.expense ? props.expense.note : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: false
		};

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onDateChange = this.onDateChange.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
	}

	onDateChange(date) {
		if(date) {
			this.setState(() => ({createdAt: date}));
		}
	}

	onFocusChange({focused}){
		this.setState(() => ({calendarFocused: focused}));
	}

	onInputChange(e) {
		const prop = e.target.name;
		const val = e.target.value;

		if(prop === 'amount') {
			if(!val || val.match(/^\d{1,}(\.\d{0,2})?$/)) {
				this.setState(() => ({ [prop]: val }));
			}
		}
		else {
			this.setState(() => ({ [prop]: val }));
		}
	}

	onFormSubmit(e) {
		e.preventDefault();
		const { amount, description, createdAt, note } = this.state;
		const expense = {
			amount,
			description,
			createdAt: createdAt.valueOf(),
			note
		};

		if(!description || !amount) {
			this.setState(() => ({ error: 'Please provide description and amount' }));
		}
		else {
			this.setState(() => ({ error: false }));
			this.props.onSubmit(expense);
		}
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>

				{ this.state.error && <p>{this.state.error}</p>}

				<div className="form-group">
						<input
							type="text"
							name="description"
							placeholder="Description"
							autoFocus
							className="form-control"
							value={this.state.description}
							onChange={this.onInputChange}
						/>
				</div>

				<div className="form-group">
					<input
						type="text"
						name="amount"
						placeholder="Amount"
						className="form-control"
						value={this.state.amount}
						onChange={this.onInputChange}
					/>
				</div>

				<div className="form-group">
					<SingleDatePicker
						numberOfMonths={1}
						date={this.state.createdAt}
						focused={this.state.calendarFocused}
						onDateChange={this.onDateChange}
						onFocusChange={this.onFocusChange}
						isOutsideRange={() => false}
					/>
				</div>

				<div className="form-group">
						<textarea
							name="note"
							placeholder="Your note (optional)"
							className="form-control"
							value={this.state.note}
							onChange={this.onInputChange}
						>
					</textarea>
				</div>

				<button type="submit" className="btn btn-primary">Save Expense</button>

			</form>
		)
	}
}

export default ExpenseForm;
