import React from 'react';
import PropTypes from 'prop-types';
import Bars from './Bars';

import './Table.scss';

export default class Table extends React.PureComponent {

	state = {
		sorting: false
	}

	render() {
		const props = this.props
		const data = props.data
		const stats = props.stats
		const metadata = props.metadata
		const columns = metadata.columns
		const sorting = props.sorting

		return (
			<table className="Table">
				<thead>
					<tr className="rowLabels">
						{columns.map((c, idx) => (
							<th id={c.name} key={'c'+idx} className={ c.type==='integer' || c.type==='decimal' ? 'rightAlign' : '' }
								onClick={ props.sortFunc }>
									<div>{c.name}</div>
							</th>
						))}
					</tr>
					<tr className="rowHisto">
						{columns.map((c, idx) => (
							<td key={'c'+idx}>
								<Bars data={ stats[c.name].hist } />
							</td>
						))}
					</tr>
				</thead>
				<tbody className={sorting ? 'hidden' : ''}>
					{ data.map((d, idx) => (
						<tr key={'r'+idx}>
							{columns.map((c, idx) => (
								<td key={'c'+idx} className={ c.type==='integer' || c.type==='decimal' ? 'rightAlign' : '' }>
									{d[c.name]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		)
	}

}

Table.propTypes = {
    metadata: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
	stats: PropTypes.object,
	sortFunc: PropTypes.func.isRequired,
	lastSort: PropTypes.string,
	sorting: PropTypes.bool,
}