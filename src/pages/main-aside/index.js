import React from 'react';
import { Aside } from '../aside'
import { List } from '../../components/list';
const { default: Steps } = require("../../components/steps");

class MainAside extends React.Component {
  render() {
    return (
      <main>
				<div className="w-full grid grid-cols-3 gap-4 mt-10">
					<div className="col-span-2 w-full">
						<Steps />
					</div>
					<div>
						<figure>
							<img src="./images/los-cocos-img-bg.png" alt="Coconut background"/>
						</figure>
					</div>
				</div>
				<div className="w-full grid grid-cols-3 gap-4">
					<div className="col-span-2 w-full">
						<List />
					</div>
					<div className="px-2">
						<Aside/>
					</div>
				</div>
			</main>
    );
  }
}

export default MainAside;