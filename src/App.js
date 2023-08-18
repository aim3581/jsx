//create a component

function App() {
	let message = "Hi "; // uncaught Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.
	let name = "Rahul";
	return (
		<h1>
			{message}
			{name}
		</h1>
	); // this is JSX element, curly braces means we are about to add expression
}

//export default statement
export default App;
