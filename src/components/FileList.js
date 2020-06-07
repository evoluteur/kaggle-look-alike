// Component for navigating files (left nav bar)

import React from 'react';
import PropTypes from 'prop-types';

import './FileList.scss';

export default class FileList extends React.PureComponent {

	render() {
		const props = this.props
		return (
			<div className="FileList">
				<div className="dataExplo fTitle">Data Explorer</div>
				<div className="fileCount fTitle"> {props.files.length+' files'}</div>
				{ props.files.map((f, idx) => (
						<div key={ f.name } 
							id={ idx }
							className= {idx===props.selectedIdx ? 'selected' : '' }
							onClick={ props.loading ? null : props.clickFile }>
								{ f.name }
						</div>
					) 
				)}

			</div>
		)
	}
}

FileList.propTypes = {
	files: PropTypes.array.isRequired,
	selectedIdx: PropTypes.number.isRequired,
	clickFile: PropTypes.func.isRequired,
	loading: PropTypes.bool
}