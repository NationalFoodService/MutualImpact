import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from './Dashboard';
import TimeLoggingForm from './TimeLoggingForm';
import SendHrsForm from './SendHrsForm';
import HomePage from './HomePage';
import UserPage from './UserPage';

import * as routes from '../constants/routes';

const App = function(props) {
	return (
		<Router>
			<Fragment>
				<Dashboard />
				<Switch>
					<Route exact path={routes.HOME_PAGE} component={HomePage} />
					<Route exact path={routes.ADD_HRS} component={TimeLoggingForm} />
					<Route exact path={routes.SEND_HRS} component={SendHrsForm} />
					<Route path={routes.USER_PAGE} component={UserPage} />
					<Route render={({ location }) => {
						// console.log(location);
						return (
				          <h1>404! {location.pathname} not found!</h1>
				        );
			        }} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;