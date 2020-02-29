import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './pages/Home';
import Payment from './pages/Payment';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
	<Router>
		<div className="App">
	  		<Header />
			<NavBar />

	  		<div className="container">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/payment" exact component={Payment} />
				</Switch>
	  		</div>

		</div>
	</Router>
  );
}

export default App;
