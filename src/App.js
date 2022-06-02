// import logo from './logo.svg';

import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
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

		const filteredMonsters = this.state.monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(this.state.searchField);
		});

		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						const searchField = event.target.value.toLocaleLowerCase();

						this.setState(() => {
							return { searchField };
						});
					}}
				/>
				{filteredMonsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
