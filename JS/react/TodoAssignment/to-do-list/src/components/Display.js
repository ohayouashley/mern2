import React, { useState } from "react";

const Display = ({ list, setlist }) => {
	const changeMe = (item) => {
		//change value isong
		item.complete = !item.complete;

		//change list state to updated list
		setlist([...list]);
	};

	//!Delete function - if button is clicked (use filter to remove item from list)

	const deleteMe = (val) => {
		setlist(list.filter((item) => item.content !== val));
	};

	return (
		<div>
			<h2>To Do List:</h2>
			<ul>
				{/* get every object in the list */}
				{list.map((item, index) => (
					<li>
						{/* show client as checkbox */}
						<input type="checkbox" onChange={(e) => changeMe(item)} />
						{/* cross out if it is marked complete by using function to change className*/}
						<span className={item.complete ? "complete" : null}>
							{item.content}
						</span>
						{/* delete button */}
						<button
							className="smallBtn"
							onClick={(e) => deleteMe(item.content)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Display;
