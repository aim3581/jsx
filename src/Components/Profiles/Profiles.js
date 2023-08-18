//import lib if required

import "bulma/css/bulma.css";
import Assistant from "./Assistant";
import AlexaImage from "./alexa.png";
import siriImage from "./siri.png";
import cortanaImage from "./cortana.png";

//create a component

function Profile() {
	const assistants = [
		{
			title: "Alexa",
			handle: "@alexa99",
			img: AlexaImage,
			description: "Alexa is created by Amazon helps you to play music",
		},
		{
			title: "Siri",
			handle: "@siri9",
			img: siriImage,
			description: "Siri is created by Apple helps you to assist you",
		},
		{
			title: "Cortana",
			handle: "@cortana4",
			img: cortanaImage,
			description: "Cortana is created by Microsoft helps you to assist",
		},
	];
	return (
		<div>
			<section className="hero is-primary">
				{" "}
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>
			<div className="container">
				<div className="section">
					<div className="columns">
						{assistants.map((a) => {
							return (
								<div className="column is-3">
									<Assistant
										title={a.title}
										handle={a.handle}
										img={a.img}
										description={a.description}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

//export default statement
export default Profile;
