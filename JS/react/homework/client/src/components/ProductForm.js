import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import homeimg from "../img/btm.jpg";
import logo from "../img/btmlogo.png";

const ProductForm = (props) => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [skill, setSkill] = useState("");
	const [skilltwo, setSkillTwo] = useState("");
	const [skillthree, setSkillThree] = useState("");
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});

	const submitHandler = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8000/api/products", {
				title,
				price,
				description,
				skill,
				skilltwo,
				skillthree,
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
			<h3 style={{ fontFamily: "Montserrat" }}>
				What book would you like to add?
			</h3>
			<form onSubmit={submitHandler}>
				<div className="container">
					<div className="form-1">
						<div className="mb-3 col-9 p-4 bg-light text-dark custom_class_1">
							<div className="form-fields">
								<label>Title:</label>
								{errors.title && (
									<span className="accent">{errors.title.message}</span>
								)}
								<input
									onChange={(e) => setTitle(e.target.value)}
									value={title}
									name="title"
									type="text"
								/>
							</div>

							<div className="form-fields">
								<label>Author:</label>
								{errors.price && (
									<span className="accent">{errors.price.message}</span>
								)}
								<input
									onChange={(e) => setPrice(e.target.value)}
									value={price}
									name="price"
									type="text"
								/>
							</div>

							<div className="form-fields">
								<label>Description:</label>
								{errors.description && (
									<span className="accent">{errors.description.message}</span>
								)}
								<input
									onChange={(e) => setDescription(e.target.value)}
									value={description}
									name="description"
									type="text"
								/>
							</div>
						</div>
					</div>
					{/* <div className="form-2">
						<div className="mb-3 col-10 p-4 bg-light text-dark">
							<p>Skills(optional):</p>
							<div className="form-fields">
								<label>Skill</label>
								{errors.skill && (
									<span className="accent">{errors.skill.message}</span>
								)}
								<input
									onChange={(e) => setSkill(e.target.value)}
									value={skill}
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
									onChange={(e) => setSkillTwo(e.target.value)}
									value={skilltwo}
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
									onChange={(e) => setSkillThree(e.target.value)}
									value={skillthree}
									name="skillthree"
									type="text"
								/>
							</div>
						</div>
					</div> */}
					<input type="submit" className="add-button" value="Add Your Book" />
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
