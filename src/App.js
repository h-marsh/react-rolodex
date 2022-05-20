import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			name: { firstName: 'Dork', lastName: 'Supreme' },
			company: 'ztm',
		};
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Hello {this.state.name.firstName} {this.state.name.lastName}. I work
						at {this.state.company}
					</p>
					<button
						onClick={() => {
							this.setState(
								() => {
									return { name: { firstName: 'andrei', lastName: 'neagoie' } };
								},
								() => {
									console.log(this.state);
								}
							);
						}}
					>
						change name
					</button>
				</header>
			</div>
		);
	}
}

export default App;
