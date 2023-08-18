//import lib if required

import Assistant from "./Assistant";

//create a component

function Profile() {
	const assistants = [
		{
			title: "Alexa",
			handle: "@alexa99",
			img: "",
		},
		{
			title: "Siri",
			handle: "@siri9",
			img: "",
		},
		{
			title: "Cortana",
			handle: "@cortana4",
			img: "",
		},
	];
	return (
		<div>
			<div>Personal Digital Assistants</div>
			<div>
				<Assistant
					title={assistants[0].title}
					handle={assistants[0].handle}
					img={assistants[0].img}
				/>
				<Assistant
					title={assistants[1].title}
					handle={assistants[1].handle}
					img={assistants[1].img}
				/>
				<Assistant
					title={assistants[2].title}
					handle={assistants[2].handle}
					img={assistants[2].img}
				/>
			</div>
		</div>
	);
}

//export default statement
export default Profile;
