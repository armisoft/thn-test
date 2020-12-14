import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/:promo_code" render={(props) => <Main {...props} />}/>
				<Route exact path="/" render={(props) => <Main {...props} />}/>
			</Switch>
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);