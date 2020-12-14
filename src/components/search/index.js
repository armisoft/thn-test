import React from 'react';
import { AppContext } from '../../context';
import moment	from 'moment';
import 'moment/locale/es';

class Search extends React.Component {

	state = {
	}

	componentWillMount() {
		// Get defaults
		const {
			bookFrom,
			bookTo,
			adults,
			children
		} = this.context;

		this.setState({
				bookFrom,
				bookTo,
				adults,
				children
		});
	}

	handleSubmit = () => {
		const {
			setContext
		} = this.context;

		const {
			bookFrom,
			bookTo,
			adults,
			children
		} = this.state;

		setContext({
			bookFrom,
			bookTo,
			adults,
			children 
		});
	}

	handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({[name]: value}, () => {
			// Careful From date is not greater than To date
			if (name === 'bookFrom') {
				if (moment(this.state.bookTo) <= moment(value)) {
					this.setState({
						bookTo: moment(value).add(1, 'days').local().format("YYYY-MM-DD"),
					})
				}
			}
		});

		
	}

  render() {

		const {
			bookFrom,
			bookTo,
			adults,
			children
		} = this.state;

    return (
      <aside className="flex flex-col justify-center w-full py-8 bg-cover" style={{backgroundImage: 'url(./images/los-cocos-room-header-2-x.png)'}}>
				<div className="w-full bg-blue-800 bg-opacity-25">
					<div className="flex flex-col sm:flex-row justify-center p-7">
						<input name="bookFrom" className="p-2 m-1 font-sans" type="date" onChange={this.handleChange} value={bookFrom} min={moment().local().format("YYYY-MM-DD")}/>
						<input name="bookTo" className="p-2 m-1 font-sans" type="date" onChange={this.handleChange} value={bookTo} min={moment(bookFrom).local().add(1, 'days').format("YYYY-MM-DD")}/>
						<select name="adults" className="p-2 m-1" onChange={this.handleChange} value={adults}>
							<option value="1">Adults: 1</option>
							<option value="2">Adults: 2</option>
							<option value="3">Adults: 3</option>
							<option value="4">Adults: 4</option>
						</select>
						<select name="children" className="p-2 m-1" onChange={this.handleChange} value={children}>
							<option value="0">Children: 0</option>
							<option value="1">Children: 1</option>
							<option value="2">Children: 2</option>
						</select>
						<button className="m-1 px-20 py-2 bg-blue-800 text-white" onClick={this.handleSubmit}>Modify</button>
					</div>
				</div>
      </aside>
    );
  }
}

Search.contextType = AppContext;

export default Search;