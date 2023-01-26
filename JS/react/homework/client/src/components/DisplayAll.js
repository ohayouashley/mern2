import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import logo from "../img/btmlogo.png";
import homeimg from "../img/btm.jpg";

const DisplayAll = (props) => {
	const [list, setList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products")
			.then((e) => setList(e.data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div>
			<div className="navbar">
				<img src={logo} alt="by the moonlight" />
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<a
						className="btn btn-outline-dark "
						// aria-current="page"
						href={`/new`}
						style={{ fontFamily: "Caveat" }}
					>
						Add a book
					</a>
				</nav>
			</div>
			<div className="column-right">
				<img src={homeimg} alt="artsy cat img" className="cat-img" />
			</div>
			<div className="hero">
				<div className="container-table">
					{/* <p className="table-title">Passed Moons</p> */}
					<div className="seven">
						{/* <h1 className="table-title">Bookclub</h1> */}
						<ul className="list-moons">
							<li>☽</li>
							<li>M</li>
							<li>O</li>
							<li>O</li>
							<li>N</li>
							<li>S</li>
							{/* <li>❁</li> */}
							{/* <li>月</li> */}
							<li>✺</li>
							<li>P</li>
							<li>A</li>
							<li>S</li>
							<li>S</li>
							<li>E</li>
							<li>D</li>
							<li>☾</li>
						</ul>
					</div>
					<table
						className="table table-striped"
						style={{ fontFamily: "Montserrat" }}
					>
						<thead>
							<tr>
								<th>Title</th>
								<th>Author</th>

								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{list.map((item, index) => (
								<tr key={index}>
									<td>{item.title}</td>
									<td>{item.price} </td>

									{/* <td>{item.description}</td> */}
									<td>
										<a
											href={`/product/${item._id}/update`}
											className="btn btn-outline-warning"
											style={{ fontFamily: "Caveat", color: "black" }}
										>
											Edit
										</a>

										<a
											href={`/product/${item._id}/view`}
											class="btn btn-outline-dark"
											style={{ fontFamily: "Caveat" }}
										>
											Details
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* TESTING STARTS HERE  */}
			{/* <div className="card" style="width: 18rem;">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div> */}
			{/* TESTING STOPS HERE  */}
		</div>
	);
};

export default DisplayAll;
