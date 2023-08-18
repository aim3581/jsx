// Import React and ReactDOM lib
import React from "react"; // what a component is and how multiple comp work together
import ReactDOM from "react-dom/client"; // how to get a component to show up in the browser
import Profile from "./Components/Profiles/Profiles";

//2 Get a reference to the div with id root

const elementRoot = document.getElementById("root");

//3 tell React to take control of that elem
const root = ReactDOM.createRoot(elementRoot);

//5  Show the componanet on the screen
function PrintVariables() {
	let message = "Hi "; // uncaught Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.
	let name = "Rahul";
	return (
		<h1>
			{message}
			{name}
		</h1>
	); // this is JSX element, curly braces means we are about to add expression
}

function InputProps() {
	const inputType = "number";
	const minValue = 5;
	const maxValue = 10;
	return (
		<div>
			<input
				type={inputType}
				min={minValue}
				max={maxValue}
				style={{ border: "2px solid red" }}
			/>
			<hr />
			{/* props follow camelcase syntax, maxlength is refered as maxLength in JSX */}
			<textarea autoFocus maxLength={25} />
		</div>
	); //
}

function ApplyStyle() {
	const inputType = "number";
	const minValue = 5;
	const maxValue = 10;
	return (
		<input
			type={inputType}
			min={minValue}
			max={maxValue}
			style={{ border: "2px solid red" }} // style prop expects object mapping to style elements
		/>
	); //
}

root.render(<Profile />);
