import "./App.css";
import ProductForm from "./components/ProductForm";
import DisplayAll from "./components/DisplayAll";
import DisplayOne from "./components/DisplayOne";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Card from "react-bootstrap";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					{/* <Route path="/" element={<ProductForm />}/> */}
					<Route path="/" element={<DisplayAll />} />
					<Route path="/product/:id/update" element={<UpdateProduct />} />
					<Route path="/product/:id/view" element={<DisplayOne />} />
					<Route path="/new" element={<ProductForm />} />
				</Routes>
			</div>
			;
		</BrowserRouter>
	);
}

export default App;
