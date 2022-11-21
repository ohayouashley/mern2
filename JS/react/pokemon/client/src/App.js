import "./App.css";
import React, { useState, useEffect } from "react"; //*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catchall from "./components/Catchall";
import Home from "./components/Home";
import axios from "axios";

function App() {
	const [pokeApi, setPokeApi] = useState([]);
	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=807")
			.then((response) => {
				console.log(response.data.results);
				setPokeApi(response.data.results);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="App">
			<h2>Pokemon API</h2>
			<ul>
				{pokeApi.map((pokemon, index) => (
					<li key={index}>{pokemon.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;

//*
// function App() {
// 	const [header, setHeader] = useState("Header");
// 	return (
// 		<>
// 			<BrowserRouter>
// 				<header>{header}</header>
// 				<nav>link link link</nav>
// 				<main>
// 					<Routes>
// 						<Route path="/*" element={<Catchall setHeader={setHeader} />} />
// 						<Route exact path="/" element={<Home setHeader={setHeader} />} />
// 					</Routes>
// 				</main>
// 			</BrowserRouter>
// 		</>
// 	);
// }

// export default App;

/* 
npx create-react-app client
$cd client
npm install axios react-router-dom
npm start
*/
