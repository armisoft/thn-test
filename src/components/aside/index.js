import React from 'react';
import { AppContext } from '../../context';
import moment	from 'moment';

class Aside extends React.Component {
	
	render() {

		const {
			bookFrom,
			bookTo,
			adults,
			children,
			roomTitle,
			roomPrice,
			promoCode,
			saveToLocalStorage
		} = this.context;

		return(
			<div className="flex justify-center">
				<div className="w-full border p-4">
					<p className="text-lg font-bold">Reservation Summary</p>
					<p className="text-lg font-bold pt-6">{roomTitle}</p>
					<div className="flex pt-4">
						<div className="flex-auto">
							<p className="font-bold">Check in</p>
							<p className="pt-1 text-sm">From 15.00h</p>
						</div>
						<div className="flex-auto">
							<p className="font-bold">Check out</p>
							<p className="pt-1 text-sm">Before 12.00h</p>
						</div>
					</div>
					<div className="pt-4">
						<p className="font-bold">Reservation Date</p>
						<p className="pt-1 text-sm">From {moment(bookFrom).format("DD-MM-YYYY")} To {moment(bookTo).format("DD-MM-YYYY")}</p>
					</div>
					<div className="pt-4 pb-8">
						<p className="font-bold">People</p>
						<p className="pt-1 text-sm">{adults} Adult{adults > 1 ? 's' : ''} {children > 0 ? 'and ' + children + ' Children' : ''}</p>
					</div>
					<hr/>
					{promoCode !== 0 &&
						<div className="pt-8 flex justify-between">
							<p>Promo Code</p>
							<p>{promoCode}&#37;</p>
						</div>
					}
					<div className="pt-8 flex justify-between font-bold text-lg">
						<p>Total</p>
						<p>&euro;{roomPrice * moment(bookTo).diff(moment(bookFrom), 'days') * (promoCode!==0?((100 - promoCode)/100):1)}</p>
					</div>
					<div className="pt-8">
						<button className="w-full bg-blue-800 text-white rounded-sm p-2" onClick={saveToLocalStorage}>Save</button>
					</div>
				</div>
			</div>
		)
	}
}

Aside.contextType = AppContext;

export default Aside;