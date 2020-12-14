import React from 'react';
import Aside from '../aside';
import List from '../list';
const { default: Steps } = require("../steps");

class MainAside extends React.Component {
  render() {
    return (
      <main>
				<div className="w-full lg:grid lg:grid-cols-3 lg:gap-4 mt-10">
					<div className="col-span-2 w-full">
						<Steps />
					</div>
					<div>
						<figure className="text-center">
							<img className="inline-block" src="./images/los-cocos-img-bg.png" alt="Coconut background"/>
						</figure>
					</div>
				</div>
				<div className="w-full lg:grid lg:grid-cols-3 lg:gap-4">
					<div className="col-span-2 w-full">
						<List />
					</div>
					<div className="pt-4 px-8 lg:pt-0 lg:px-2">
						<Aside/>
					</div>
				</div>
			</main>
    );
  }
}

export default MainAside;