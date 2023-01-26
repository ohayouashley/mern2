import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "../img/btmlogo.png";
import homeimg from "../img/btmlogo.png";

const UpdateProduct = (props) => {
	const [item, setItem] = useState("");
	// const [price, setPrice] = useState("");
	// const [description, setDescription] = useState("");
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/products/${id}`)
			.then((res) => setItem(res.data))
			.catch((e) => console.log(e));
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();

		axios
			.put(`http://localhost:8000/api/products/${id}`, {
				item,
			})
			.then((e) => navigate("/"))
			.catch((e) => {
				console.log(e);
				setErrors(e.response.data.errors);
			});
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
							style={{ fontFamily: "Calibri", color: "black" }}
						>
							Home
						</a>
					</li>
				</ul>
			</div>
			<h3 style={{ fontFamily: "Montserrat" }}>Edit: {item.title}</h3>
			<form onSubmit={submitHandler}>
				<div className="container">
					<div className="form-1">
						<div className="mb-3 col-9 p-4 bg-light text-dark custom_class_1">
							<div className="form-fields">
								<label>Title</label>
								{errors.title && (
									<span className="accent">{errors.title.message}</span>
								)}
								<input
									onChange={(e) => setItem({ ...item, title: e.target.value })}
									value={item.title}
									name="title"
									type="text"
								/>
							</div>

							<div className="form-fields">
								<label>Author</label>
								{errors.price && (
									<span className="accent">{errors.price.message}</span>
								)}
								<input
									onChange={(e) => setItem({ ...item, price: e.target.value })}
									value={item.price}
									name="price"
									type="text"
								/>

								<div className="form-fields">
									<label>Description</label>
									{errors.description && (
										<span className="accent">{errors.description.message}</span>
									)}
									<input
										onChange={(e) =>
											setItem({ ...item, description: e.target.value })
										}
										value={item.description}
										name="description"
										type="text"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="form-2">
						<div className="mb-3 col-10 p-4 bg-light text-dark">
							<p>Skills (optional):</p>
							<div className="form-fields">
								<label>Skill</label>
								{errors.skill && (
									<span className="accent">{errors.skill.message}</span>
								)}
								<input
									onChange={(e) => setItem({ ...item, skill: e.target.value })}
									value={item.skill}
									name="skill"
									type="text"
								/>
							</div>

							<div className="form-fields">
								<label>Skill 2</label>
								{errors.skilltwo && (
									<span className="accent">{errors.skilltwo.message}</span>
								)}
								<input
									onChange={(e) =>
										setItem({ ...item, skilltwo: e.target.value })
									}
									value={item.skilltwo}
									name="skilltwo"
									type="text"
								/>
							</div>
							<div className="form-fields">
								<label>Skill 3</label>
								{errors.skillthree && (
									<span className="accent">{errors.skillthree.message}</span>
								)}
								<input
									onChange={(e) =>
										setItem({ ...item, skillthree: e.target.value })
									}
									value={item.skillthree}
									name="skillthree"
									type="text"
								/>
							</div>
						</div>
					</div> */}
					<input
						type="submit"
						className="add-button"
						value="Update Your Book"
					/>
				</div>
			</form>
		</div>
	);
};

export default UpdateProduct;
