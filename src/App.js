
import React from 'react';
import meta from './metadata.js';
import FileList from './components/FileList.js';
import DataSpace from './components/DataSpace.js';
import * as d3 from 'd3';

import './App.scss';

export default class App extends React.Component {

	dataCache = {}
	state = {
		selectedIdx: 0,
		data: null,
		stats: null,
		loading: true,
		showAllRows: false,
	}

	clickFile = evt => {
		const selectedIdx = parseInt(evt.currentTarget.id)
		document.getElementById('DataSpace').scrollTo(0, 0)
		this.setState({
			selectedIdx: selectedIdx,
			data: null,
			stats: null,
			loading: true,
			showAllRows: false,
			error: null
		})
		this.getData(meta[selectedIdx])
	}

	render() {
		const state = this.state
		const idx = state.selectedIdx
		return (
			<div className="App">
				<FileList loading={ this.state.loading }  files={ meta } clickFile={this.clickFile} selectedIdx={idx} />
				{this.state.error ? (
					<div className="error">
						An error occured while requesting data from the server.
					</div>
				) : (
					<DataSpace 
						loading={ state.loading } 
						metadata={ meta[idx] } 
						data={ state.data } 
						stats={ state.stats } 
						sortFunc={ this.sortData }
						lastSort={ state.lastSort }
						showAllRows={ state.showAllRows }
						removeSizeLimitFunc={ this.removeSizeLimit }
					/>
				)}
			</div>
		)
	}

	componentDidMount() {
		//document.title = 
		//window.scrollTo(0, 0)
		this.getData(meta[this.state.selectedIdx])
	}

	getData(metadata) {
		// get data, cast values, and gather stats
		const url = metadata.url
		if(this.dataCache[url]){
			const fullData = this.dataCache[url]
			this.setState({
				data: fullData.data,
				stats: fullData.stats,
				loading: false,
				showAllRows: false,
				lastSort: '',
			})
		}else{
			const cols = metadata.columns
			let stats = {}
			cols.forEach(c => stats[c.name] = c.type === 'string' ? {
				nulls: 0,
			} : {
				min: Number.POSITIVE_INFINITY,
				max: Number.NEGATIVE_INFINITY,
				nulls: 0,
				total: 0
			})
			const parsingMap = {
				integer: v => parseInt(v),
				decimal: v => parseFloat(v),
				//TODO: type casting
				time: v => v,
				date: v => v,
				timestamp: v => v,
			}
			d3.csv(url, d => {
				cols.forEach(c => {
					if(c.type!=='string'){
						const colName = c.name
						let v = d[colName]
						if(v===''){
							stats[c].nulls += 1
							d[colName] = null
						}else{
							v = parsingMap[c.type](v)
							d[colName] = v
							if(c.type==='integer' || c.type==='decimal'){
								if(v > stats[colName].max){
									stats[colName].max = v
								}
								if(v < stats[colName].min){
									stats[colName].min = v
								}
								stats[colName].total += v
							}
						}
						
					}
				})
				return d
			}).then(data => {
				cols.forEach(c => {
					if(c.type!=='string'){
						const statCol = stats[c.name]
						const div = data.length - statCol.nulls
						statCol.mean = div!==0 ? (statCol.total / div) : 'N/A'
						if(c.type==='integer' || c.type==='decimal'){
							const columValues = data.map(d => d[c.name])
							statCol.stdDev = d3.deviation(columValues)
							statCol.hist = d3.histogram()
								.domain([statCol.min, statCol.max])
								.thresholds(19)(columValues)
								.map(b => b.length)
						}
					}
				})

				const info = {
					data: data,
					stats: stats,
				}
				this.dataCache[url] = info
				this.setState({
					loading: false,
					lastSort: '',
					...info
				})

			}).catch(err => {
				this.setState({
					loading: false,
					error: err.message
				})
			})
		}
	}

	sortData = evt => {
		const colId = evt.currentTarget.id
		const cols = meta[this.state.selectedIdx].columns
		const col = cols.find(c => c.name===colId)
		const colName = col.name

		if(colName=== this.state.lastSort){
			this.setState({ 
				data: this.state.data.reverse(),
				lastSort: '',
			 })
		}else{
			let comparatorFunc
			if(col.type==='string'){
				comparatorFunc = (a, b) => (a[colName]||'').localeCompare(b[colName]||'')
			}else{
				// TODO: other cases
				comparatorFunc = (a, b) => {
					if(a[colName]>b[colName]){
						return 1;
					}
					if(b[colName]>a[colName]){
						return -1;
					}
					return 0;
				}
			}
			this.setState({ 
				data: this.state.data.sort(comparatorFunc),
				lastSort: colName,
				showAllRows: false
			 })
		}

	}

	removeSizeLimit = () => {
		this.setState({
			showAllRows: true
		})
	}

}
