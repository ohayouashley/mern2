import "./App.css";
import { Browser, Routes, Route } from "react-router-dom";
import ParamsComponent from "./components/ParamsComponent";
import Home from "./components/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/*everything here is going to be a route*/}
				<Routes>
					<Route element={<Home />} path="/home" />
					<Route element={<ParamsComponent />} path="/:word" />
					<Route element={<ParamsComponent />} path="/:word/:color/:bgCol" />
				</Routes>
			</div>
			;
		</BrowserRouter>
	);
}

export default App;
