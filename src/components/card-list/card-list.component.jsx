import { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div>
				{monsters.map((monster) => (
					<h1>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default CardList;
