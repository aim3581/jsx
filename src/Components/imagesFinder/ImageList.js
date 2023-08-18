import ImageShow from "./ImageShow";
import bird from "../Animals/bird.svg";
import cat from "../Animals/cat.svg";
import cow from "../Animals/cow.svg";
import horse from "../Animals/horse.svg";
import gator from "../Animals/gator.svg";
import dog from "../Animals/dog.svg";
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
