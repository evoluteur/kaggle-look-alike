import React from 'react';
import PropTypes from 'prop-types';
import { CloudDownload, ViewModule, Label } from '@material-ui/icons';

import './TitleBar.scss';

export default class TitleBar extends React.Component {

	render() {
		const props = this.props
		return (
			<div className="TitleBar">
				<h1>
					{ props.name + ' ' } 
					<span>{ props.count }</span>
				</h1>
				<div className="topIcons">
					{props.view==='table' 
						? 
							<Label onClick={props.toggleViewFunc} />
						: 
							<ViewModule onClick={props.toggleViewFunc} />
					}
					<a href={ props.url } target="_new"><CloudDownload /></a>					
				</div>
			</div>
		)
	}
}

TitleBar.propTypes = {
    name: PropTypes.string.isRequired,
	count: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	toggleViewFunc: PropTypes.func.isRequired,
	view: PropTypes.string.isRequired,
}