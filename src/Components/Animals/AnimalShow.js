import bird from "./bird.svg";
import cat from "./cat.svg";
import cow from "./cow.svg";
import horse from "./horse.svg";
import gator from "./gator.svg";
import dog from "./dog.svg";
import heart from "./heart.svg";
import { useState } from "react";

const svgMap = {
	bird,
	cat,
	cow,
	heart,
	horse,
	gator,
	dog,
};

export default function AnimalShow({ type, key }) {
	const [clicks, setClicks] = useState(0);

	function handleClick() {
		setClicks(clicks + 1);
	}
	return (
		<div onClick={handleClick} className="animals-show">
			<img alt="type" src={svgMap[type]} className="animal" />
			<img
				alt="heart"
				src={svgMap["heart"]}
				style={{ width: 10 + 10 * clicks + "px" }}
				className="heart "
			/>
		</div>
	);
}
