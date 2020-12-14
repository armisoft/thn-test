import React from 'react';
import { withRouter } from 'react-router-dom';
import ContextProvider from '../../context';
import Navbar from '../../components/navbar';
import Search from '../../components/search';
import MainAside from '../../components/main-aside';
import Footer from '../../components/footer';

class Main extends React.Component {
	
  render() {
    return (
			<React.Fragment>
				<ContextProvider>
					<Navbar />
					<Search />
					<MainAside />
					<Footer />
				</ContextProvider>
			</React.Fragment>
		);
  }
}

export default withRouter(Main);