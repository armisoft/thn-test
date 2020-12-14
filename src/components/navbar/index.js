import React from 'react';

class Navbar extends React.Component {

	state = { isBurgerOpen: false };

  toggleBurgerMenu = () => {
    this.setState({ isBurgerOpen: !this.state.isBurgerOpen });
  };

  render() {
    return (
      <header>
			<div className="lg:hidden p-2">
					<button className={`burger border ${this.state.isBurgerOpen ? "burger--open" : ""}`} onClick={this.toggleBurgerMenu}>
						<div className="burger__inner">
							<span className="burger__bar"></span> 
							<span className="burger__bar"></span> 
							<span className="burger__bar"></span>
						</div>
					</button>
				</div>
				<nav className={`w-full lg:hidden ${!this.state.isBurgerOpen ? "hidden" : ""}`}>
					<ul>
						<li className="p-4">
							<a href="/#" className="">Home</a>
						</li>
						<li className="p-4">
							<a href="/#" className="">Rooms</a>
						</li>
						<li className="p-4">
							<a href="/#" className="">Restaurants</a>
						</li>
						<li className="p-4">
							<a href="/#" className="">Weddings</a>
						</li>
						<li className="p-4">
							<a href="/#" className="">Membership</a>
						</li>
						<li className="p-4">
							<a href="/#" className="">Contact</a>
						</li>
					</ul>
				</nav>
				<div className="hidden lg:flex w-full justify-evenly text-md text-gray-600">
					<nav className="flex-grow">
						<ul className="flex justify-evenly">
							<li className="p-4 hover:text-black">
								<a href="/#" className="">Home</a>
							</li>
							<li className="p-4 hover:text-black">
								<a href="/#" className="">Rooms</a>
							</li>
							<li className="p-4 hover:text-black">
								<a href="/#" className="">Restaurants</a>
							</li>
						</ul>
					</nav>
					<div className="p-1 flex-shrink-0">
						<div className="flex">
							<div className="flex-shrink-0">
								<img src="./images/los-cocos-iso-footer.png" className="p-1 h-12" alt="logo"/>
							</div>
							<div className="flex flex-col pt-2">
								<span className="text-lg font-bold text-blue-800">Los Cocos</span>
								<span className="text-xxs text-gray-400 -mt-2">Bungalows</span>
							</div>
						</div>
					</div>
					<nav className="flex-grow">
						<ul className="flex justify-evenly">
							<li className="p-4 hover:text-black">
								<a href="/#" className="">Weddings</a>
							</li>
							<li className="p-4 hover:text-black">
								<a href="/#" className="">Membership</a>
							</li>
							<li className="p-4 hover:text-black">
								<a href="/#" className="">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
      </header>
    );
  }
}

export default Navbar;