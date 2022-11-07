import "./App.css";
import Person from "./components/Person"; //****step 4 here */

function App() {
	return (
		<div className="App">
			<Person />
		</div>
	);
}
//*step 5 add your component name (in this case Person) between the <div> in a self-closing tag
export default App;
//?functional components can be used multiple times so you can put that person tag 3 times and it'll say the same thing 3 times on  your webpage
