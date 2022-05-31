// import logo from './logo.svg';

import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};

		console.log('constructor');
	}

	async componentDidMount() {
		console.log('componentDidMount');
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		this.setState(() => {
			return { monsters: data };
		});
	}

	render() {
		console.log('render');
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						this.state.monsters.filter(event.target.value);
					}}
				/>
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
