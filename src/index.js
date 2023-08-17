// Import React and ReactDOM lib
import React from "react"; // what a component is and how multiple comp work together
import ReactDOM from "react-dom/client"; // how to get a component to show up in the browser

//2 Get a reference to the div with id root

const elementRoot = document.getElementById("root");

//3 tell React to take control of that elem
const root = ReactDOM.createRoot(elementRoot);

//5  Show the componanet on the screen
function App() {
	let message = {}; // uncaught Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.
	return <h1>{message}</h1>; // this is JSX element, curly braces means we are about to add expression
}

root.render(<App />);
