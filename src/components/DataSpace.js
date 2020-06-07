// Component for viewing a file ( table or columns stats)

import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import Table from './Table';
import Stats from './Stats'; 
import Spinner from './Spinner'; 

export default class DataSpace extends React.Component {

	state = {
		view: 'table'
	}

	render() {
		const props = this.props
		const data = props.data
		const metadata = this.props.metadata
		let count = ((data && data.length) ? data.length + ' rows, ' : '') + metadata.columns.length + ' columns'

		return (
			<div id="DataSpace" className="DataSpace">
				<TitleBar name={ metadata.name } count={ count } url={ metadata.url } toggleViewFunc={ this.toggleView } view={this.state.view} />
				<div className="file_desc">{ metadata.description }</div>
				{ props.loading 
					?
						<Spinner />
					: 
						this.state.view === 'table'
							?
							<Table metadata={ metadata } data={ data } stats={ props.stats } sortFunc={ props.sortFunc } lastSort={ props.lastSort } />
								:
							<Stats metadata={ metadata } stats={ props.stats } />
				}
			</div>
		)
	}

	toggleView = () => {
		document.getElementById('DataSpace').scrollTo(0, 0)
		this.setState({
			view: this.state.view==='table' ? 'stats' : 'table'
		})
	}

}


DataSpace.propTypes = {
	loading: PropTypes.bool,
	metadata: PropTypes.object.isRequired,
	data: PropTypes.array,
	stats: PropTypes.object,
	sortFunc: PropTypes.func.isRequired,
	lastSort: PropTypes.string
}