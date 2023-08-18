export default function Assistant({ title, handle, img, description }) {
	console.log(img);
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-1by1 is-rounded">
					<img src={img} alt={title + " logo"} />
				</figure>
			</div>
			<div className="card-content">
				<div className="media-content">
					<p className="title is-4">Title is {title}</p>
					<p className="subtitle is-6">Handle is {handle}</p>
				</div>
			</div>
			<div className="content">{description}</div>
		</div>
	);
}
