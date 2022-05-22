// import logo from './logo.svg';

import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [{ name: 'homer' }, { name: 'marge' }, { name: 'bart' }],
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					return <h1>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
