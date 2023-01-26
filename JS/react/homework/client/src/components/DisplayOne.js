import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import homeimg from "../img/btm.jpg";
import logo from "../img/btmlogo.png";

const DisplayOne = (props) => {
	const [item, setItem] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [num, setNum] = useState(0);
	const [saveNum, setSaveNum] = useState("");

	const incNum = (id) => {
		axios
			.get(`http://localhost:8000/api/likes/${id}`)
			.then((res) => setItem(res.data))
			.catch((e) => console.log(e));
	};

	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/products/${id}`)
			.then((res) => setItem(res.data))
			.catch((e) => console.log(e));
	}, []);

	const handleDelete = () => {
		axios
			.delete(`http://localhost:8000/api/products/${id}`)
			.then((e) => navigate("/"))
			.catch((e) => console.log(e));
	};

	return (
		<div>
			<div className="navbar">
				<img src={logo} alt="by the moonlight" />
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a
							href={`/`}
							className="btn btn-outline-warning"
							style={{ fontFamily: "Montserrat", color: "black" }}
						>
							Home
						</a>
					</li>
					<li className="nav-item">
						<button
							onClick={handleDelete}
							className="btn btn-outline-warning"
							style={{ fontFamily: "Montserrat", color: "black" }}
						>
							Delete
						</button>
					</li>
				</ul>
			</div>
			{/* <div className="box">
				<img src={homeimg} alt="artsy cat img" className="box-img" />
				<div className="mamaRow">
					<div className="card col-md-6" style={{ width: "18rem" }}>
						<ul className="list-group list-group-flush">
							<li className="row">Title</li>
							<li className="row">Author</li>
							<li className="row">Description</li>
						</ul>
					</div>
					<div className="card col-md-6" style={{ width: "18rem " }}>
						<ul className="list-group list-group-flush">
							<li className="row">{item.title}</li>
							<li className="row">{item.price}</li>
							<li className="row">{item.description}</li>
						</ul>
					</div>
				</div>
			</div> */}
			{/* <div className="incrementLikes">
				<p>{num} likes</p>
				<button
					onClick={incNum}
					className="btn btn-outline-warning"
					style={{ color: "black" }}
				>
					Like
				</button>
			</div> */}
			{/*


			{/* <div className="card col-md-6">
				<div className="row"> Title</div>
				<div className="row"> Author</div>
				<div className="row"> Description</div> */}
			{/* <div class="row"> Skills</div> */}
			{/* </div> */}
			{/* <div className="card col-md-6">
				<div className="row"> {item.title}</div>
				<div className="row"> {item.price}</div>
				<div className="row"> {item.description}</div> */}
			{/* <div class="row">
						{" "}
						{item.skill}, {item.skilltwo}, {item.skillthree}{" "}
					</div> */}
			{/* </div> */}
			<div className="card-container">
				<div className="card" style={{ width: "30rem" }}>
					<img src={homeimg} alt="artsy cat img" className="card-img-top" />
					<div className="card-body" style={{ fontFamily: "Montserrat" }}>
						<h5 className="card-title">Title: {item.title}</h5>
						<p className="card-text">Author: {item.price}</p>
						<p className="card-text">Description: {item.description}</p>
						<div className="incrementLikes">
							<p>{item.saveNum} likes</p>
							<button
								onClick={() => incNum(item._id)}
								className="btn btn-outline-warning"
								style={{ fontFamily: "Caveat", color: "black" }}
							>
								Like
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DisplayOne;
