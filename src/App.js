// import logo from './logo.svg';

import { Component } from 'react';
import './App.css';

const dataURL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
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
