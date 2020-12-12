import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <aside className="flex flex-col justify-center w-full h-40 bg-cover" style={{backgroundImage: 'url(./images/los-cocos-room-header-2-x.png)'}}>
				<div className="w-full bg-blue-800 bg-opacity-25 h-24">
					<div className="flex justify-center p-7">
						<input className="p-2 mx-1" type="date" defaultValue="2018-09-05"/>
						<input className="p-2 mx-1" type="date" defaultValue="2018-09-16"/>
						<select className="p-2 mx-1">
							<option defaultValue="2">Adults: 2</option>
						</select>
						<select className="p-2 mx-1">
							<option defaultValue="0">Children: 0</option>
						</select>
						<button className="mx-1 px-20 py-2 bg-blue-800 text-white">Modify</button>
					</div>
				</div>
      </aside>
    );
  }
}

export default Search;