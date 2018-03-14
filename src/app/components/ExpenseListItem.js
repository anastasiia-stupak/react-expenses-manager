import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function ExpenseListItem({id, description, note, createdAt, amount}) {
	return (
			<div className="col-12 expense-list-item">
				<Link to={`edit/${id}`}>
					<div className="row">
						<div className="col-6">
							<h1>{description} <img className="expense-list-item__edit-icon" src="/assets/images/edit.png" alt="edit icon"/></h1>
							<p>{note}</p>
							<p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
						</div>

						<div className="col-6">
							<h1 className="float-right">{amount} $</h1>
						</div>
					</div>

				</Link>
			</div>
	)
}

export default ExpenseListItem;
