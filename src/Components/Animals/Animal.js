import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./Animals.css";

function getRandomAnimalType() {
	const animals = ["cow", "bird", "horse", "cat", "dog", "gator"];
	return animals[Math.floor(Math.random() * animals.length)];
}

export default function Animal() {
	const [animals, setAnimals] = useState([]);

	const onButtonClick = () => {
		const type = getRandomAnimalType();
		console.log("button clicked!");
		// animals.push(type)      don't do this, we never want to modify state directly
		setAnimals([...animals, type]);
	};

	const rederAnimals = animals.map((a, i) => {
		return <AnimalShow type={a} key={i} />;
	});
	return (
		<div className="app">
			<button onClick={onButtonClick}>Add Animal</button>
			<div className="animals-list">{rederAnimals}</div>
		</div>
	);
}
