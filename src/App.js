// import logo from './logo.svg';

import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	async componentDidMount() {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		this.setState(() => {
			return { monsters: data };
		});
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<SearchBox
					className="search-box"
					onChangeHandler={onSearchChange}
					placeholder="search monsters!"
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
