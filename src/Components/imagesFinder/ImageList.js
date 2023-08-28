import ImageShow from "./imageShow";
import bird from "../animals/bird.svg";
import cat from "../animals/cat.svg";
import cow from "../animals/cow.svg";
import horse from "../animals/horse.svg";
import gator from "../animals/gator.svg";
import dog from "../animals/dog.svg";
const svgMap = {
	bird,
	cat,
	cow,
	horse,
	gator,
	dog,
};

export default function ImageList({ query }) {
	console.log(query);
	const images = [
		"cow",
		"bird",
		"horse",
		"cat",
		"dog",
		"gator",
		"cow",
		"bird",
		"horse",
		"cat",
		"dog",
		"gator",
		"cow",
		"bird",
		"horse",
		"cat",
		"dog",
		"gator",
		"cow",
		"bird",
		"horse",
		"cat",
		"dog",
		"gator",
	];
	const rederImages = images.map((a) => {
		return (
			(query == "" || a == query) && <ImageShow type={a} img={svgMap[a]} />
		);
	});
	return <div className="image-list">{rederImages}</div>;
}
