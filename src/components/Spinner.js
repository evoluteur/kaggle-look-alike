import React from 'react';
import PropTypes from 'prop-types'

import './Spinner.scss';

// HTML & CSS from http://tobiasahlin.com/spinkit/

export default class Spinner extends React.PureComponent {

    render() {

        return (
            <div className="evol-loading"> 
                <div className="loading_txt">{this.props.message || 'Loading...'}</div> 
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        );
    }

}

Spinner.propTypes = {
	message: PropTypes.string,
}
