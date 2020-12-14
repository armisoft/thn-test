import React from 'react';
import { habitaciones } from '../../data/habitaciones';
import { AppContext } from '../../context';
class List extends React.Component {
	render () {

		const {
			setContext,
			promoCode
		} = this.context;

		return(
			<div className="flex justify-center">
				<ul className="px-8 lg:pl-10 lg:px-0">
					{habitaciones.map((data, key) => {
						return (
							<li className="border cursor-pointer hover:bg-gray-100" key={data.id} onClick={() => setContext({
								selectedRoom:data.id,
								roomTitle: data.title,
								roomPrice: data.price
								})}>
								<div className="flex flex-col sm:flex-row sm:p-6">
									<figure className="flex-shrink-0">
										<img className="w-full h-50 sm:-ml-12" src={`./images/${data.image}`} alt={data.title}/>
									</figure>
									<div className="p-4 sm:p-0 sm:-ml-6 flex flex-col justify-between">
										<div>
											<span className="font-bold inline-block mb-2">{data.title}</span>
											<p className="inline-block mb-2 text-sm">{data.description}</p>
										</div>
										<div>
											<span className="text-sm">Size: {data.size}</span>
											<div className="text-sm pt-4 flex justify-between">
												<div>
													<img src="./images/double-bed.svg" alt={data.beds}></img>
													<span>Beds: {data.beds}</span>
												</div>
												<span className="self-end">
													People: {data.people}
												</span>
												<span className="text-lg font-bold self-end">
													&euro;{data.price * (promoCode!==0 ? ((100 - promoCode)/100):1)}
												</span>
											</div>
										</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		)
	}
}

List.contextType = AppContext;

export default List;