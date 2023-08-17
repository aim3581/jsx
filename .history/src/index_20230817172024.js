// Import React and ReactDOM lib
import React from "react"; // what a component is and how multiple comp work together
import ReactDOM from "react-dom/client"; // how to get a component to show up in the browser

//2 Get a reference to the div with id root

const elementRoot = document.getElementById("root");

//3 tell React to take control of that elem
const root = ReactDOM.createRoot(elementRoot);

//5  Show the componanet on the screen
function App() {
	return <h1>Hi There!</h1>; // this is JSX element
}

root.render(<App />);
