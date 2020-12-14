import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="py-2 mt-4 border-t text-sm">
				<div className="flex w-full justify-between text-md text-gray-600">
				<nav className="hidden lg:block">
					<ul className="flex items-center">
						<li className="pl-4 hover:text-black">
							<img src="./images/los-cocos-iso-footer.png" className="p-1 h-12" alt="logo"/>
						</li>
						<li className="pl-4 hover:text-black">
							<a href="/#" className="">Terms and Conditions</a>
						</li>
						<li className="pl-4 hover:text-black">
							<a href="/#" className="">Privacy Policy</a>
						</li>
						<li className="pl-4 hover:text-black">
							<a href="/#" className="">About us</a>
						</li>
						<li className="pl-4 hover:text-black">
							<a href="/#" className="">Partners</a>
						</li>
					</ul>
				</nav>
				<nav className="w-full md:w-auto">
					<ul className="flex w-full md:w-auto items-center text-blue-600">
						<li className="hidden md:block pl-4 hover:text-blue-700">
							<a href="mailto:reservations@loscocosbungalows.com">reservations@loscocosbungalows.com</a>
						</li>
						<li className="hidden md:block pl-4 hover:text-blue-700">
							<a href="tel:+34982458720" className="">Tlf: +34 982 458 720</a>
						</li>
						<li className="pl-4 w-full md:w-auto text-center">
							<img className="max-w-xs inline-block" src="./images/footer_icons.png" alt="Social Networks"/>
						</li>
					</ul>
				</nav>
				</div>
      </footer>
    );
  }
}

export default Footer;