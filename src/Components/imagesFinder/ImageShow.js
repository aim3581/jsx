export default function ImageShow({ type, img }) {
	return (
		<div className="image-show">
			<img alt="type" src={img} className="image" />
		</div>
	);
}
