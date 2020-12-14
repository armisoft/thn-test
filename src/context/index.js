import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import moment	from 'moment';
import 'moment/locale/es';

export const AppContext = React.createContext({});
export const ContextConsumer = AppContext.Consumer;

class ContextProvider extends React.Component {
	state = {
		selectedRoom: 1,
		bookFrom: moment().local().format("YYYY-MM-DD"),
		bookTo: moment().local().add(1, 'days').format("YYYY-MM-DD"),
		adults: 1,
		children: 0,
		roomTitle: '',
		roomPrice: 0,
		promoCode: queryString.parse(this.props.location.search).promo_code || 0 
	}

	setContext = (data) => {
			this.setState(data);
	}
	
	componentWillMount() {
		// Initial state
		this.setState({
				selectedRoom: JSON.parse(localStorage.getItem("selectedRoom")) || this.state.selectedRoom,
				bookFrom: localStorage.getItem("bookFrom") ? moment(localStorage.getItem("bookFrom")).local().format("YYYY-MM-DD") : this.state.bookFrom,
				bookTo: localStorage.getItem("bookTo") ? moment(localStorage.getItem("bookTo")).local().format("YYYY-MM-DD") :  this.state.bookTo,
				adults: localStorage.getItem("adults") || this.state.adults,
				children: localStorage.getItem("children") || this.state.children,
				roomTitle: localStorage.getItem("roomTitle") || this.state.roomTitle,
				roomPrice: localStorage.getItem("roomPrice") || this.state.roomPrice,
		});
	}

	saveToLocalStorage = () => {
			localStorage.setItem("selectedRoom", this.state.selectedRoom);
			localStorage.setItem("bookFrom", this.state.bookFrom);
			localStorage.setItem("bookTo", this.state.bookTo);
			localStorage.setItem("adults", this.state.adults);
			localStorage.setItem("children", this.state.children);
			localStorage.setItem("roomTitle", this.state.roomTitle);
			localStorage.setItem("roomPrice", this.state.roomPrice);
	}

	render() {	
		
			const {
					children,
			} = this.props;

			return (
					<AppContext.Provider
							value={{
									...this.state,
									setContext: this.setContext,
									saveToLocalStorage: this.saveToLocalStorage
							}}
					>
							{ children }
					</AppContext.Provider>
			);
	}
}

export default withRouter(ContextProvider);
