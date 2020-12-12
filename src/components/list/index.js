import React from 'react';
import { habitaciones } from '../../data/habitaciones';

export const List = () => {
	return(
		<div className="flex justify-center">
			<ul className="pl-10">
				{habitaciones.map((data, key) => {
					return (
						<li className="border" key={data.id}>
							<div className="flex p-6">
								<figure className="flex-shrink-0">
									<img className="h-50 -ml-12" src={`./images/${data.image}`} alt={data.title}/>
								</figure>
								<div className="-ml-6 flex flex-col justify-between">
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
												&euro;{data.price}
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