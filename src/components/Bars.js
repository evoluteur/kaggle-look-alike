// Bar charts component

import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import './Bars.scss';

export default class Bars extends React.Component {

    render() {
        const buckets = this.props.data

        if(buckets){
            const maxSize = d3.max(buckets)
    
            return (
                <div className="Bars"> 
                    {buckets.map((b, idx) => (
                            <div key={'b'+idx} style={{ 
                                    left: (idx * 10)+'px', 
                                    height: parseInt(100*(b/maxSize))+'px'
                                }} 
                                title={b}></div>
                        )
                    )}
                </div>
            )
        }else{
            return (
                <div className="NoBars">N/A</div>
            )
        }
    }
}

Bars.propTypes = {
    data: PropTypes.array
}