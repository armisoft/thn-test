import React from 'react';

export const Aside = () => {
	return(
		<div className="flex justify-center">
			<div className="w-full border p-4">
				<p className="text-lg font-bold">Reservation Summary</p>
				<p className="text-lg font-bold pt-6">Mini Dreamy Room</p>
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
					<p className="pt-1 text-sm">From 5-09-2018 To 16-09-2018</p>
				</div>
				<div className="pt-4 pb-8">
					<p className="font-bold">People</p>
					<p className="pt-1 text-sm">2 Adults</p>
				</div>
				<hr/>
				<div className="pt-8 flex justify-between font-bold text-lg">
					<p>Total</p>
					<p>&euro;200</p>
				</div>
				<div className="pt-8">
					<button className="w-full bg-blue-800 text-white rounded-sm p-2">Save</button>
				</div>
			</div>
		</div>
	)
}