// import logo from './logo.svg';

import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [
				{ name: 'homer', id: 1 },
				{ name: 'marge', id: 12 },
				{ name: 'bart', id: 14 },
				{ name: 'lisa', id: 15 },
				{ name: 'maggie', id: 16 },
			],
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
