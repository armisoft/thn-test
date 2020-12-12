import React from 'react';

class Steps extends React.Component {
  render() {
    return (
      <aside className="flex justify-center">
				<div>
					<p>
						<span className="text-xl font-bold text-gray-700">
							Rooms &amp; Rates
						</span>
					</p>
					<p>
						<span className="text-lg text-gray-400">
							Plan your perfect stay at our hotel
						</span>
					</p>
					<div className="mt-4">
						<img src="./images/los-cocos-1.png" alt="steps"/>
					</div>
				</div>
      </aside>
    );
  }
}

export default Steps;