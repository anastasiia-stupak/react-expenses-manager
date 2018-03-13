import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

//actions
import{
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../actions/filters';

class ExpenseListFilters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			calendarFocused: null
		};

		this.onChangeSearchText  = this.onChangeSearchText.bind(this);
		this.handleSortBy  = this.handleSortBy.bind(this);
		this.onDatesChange  = this.onDatesChange.bind(this);
		this.onFocusChange  = this.onFocusChange.bind(this);
	}

	onChangeSearchText(e) {
		this.props.setTextFilter(e.target.value);
	}

	handleSortBy (e) {
		if(e.target.value === 'date') {
			this.props.sortByDate();
		} else if(e.target.value === 'amount') {
			this.props.sortByAmount();
		}
	}

	onDatesChange({ startDate, endDate }) {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	}


	onFocusChange(calendarFocused) {
		this.setState(() => ({calendarFocused}));
	}

	render() {
		return (
			<div className="row justify-content-center align-items-center expense-list-filters">
				<div className="col-12 col-lg-3 expense-list-filters__item">
					<input
						type="text"
						className="expense-list-filters__controls"
						placeholder="Search an expense"
						defaultValue={this.props.filters.text}
						onChange={this.onChangeSearchText}
					/>
				</div>

				<div className="col-12 col-lg-2 expense-list-filters__item">
					<select
						className="expense-list-filters__controls"
						defaultValue={this.props.filters.sortBy}
						onChange={this.handleSortBy}
					>
						<option value="date">Date</option>
						<option value="amount">Amount</option>
					</select>
				</div>

				<div className="col-12 col-lg-5 expense-list-filters__item">
					<DateRangePicker
						startDate={this.props.filters.startDate}
						endDate={this.props.filters.endDate}
						onDatesChange={this.onDatesChange}
						focusedInput={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						showClearDates={true}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters
});

const mapDispatchToProps = {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
