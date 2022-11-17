//ask questions during interview settingds .
import React from "react";
import { Link } from react-router-dom 

// @param {number[]} height
// @return {number}

var maxArea = function (height) {
	//find the two vales which create the greatest area.
	//two pointers with a sliding window

	let start = 0; //always going to be pointing to an indexposition
	let end = height.length - 1; //the index will but 1 less than the length of an array.
	//we need to know the height we are looking for which one is bigger.
	//keeps track of the largest area we have seen so far.
	let max = 0;

	while (start < end) {
		//calculate the area
		let width = end - start;
		let hight = Math.min(height[start], height[end]); //tool to use to find the minimum - this will compare to values and compare the minimum.
		let area = hight * width;
	}
	// calculate the area
	//compare current area against max.
	max = Math.max(max, area);
	if (height[end] > height[start]) {
		start++;
	} else {
		end--;
	}
	return max;
};
//*
//input of the function is an array called height - diagram showing an array with a bunch of heights.
//the difference beetween the two red lines is
//trying to find the container with the most water. find the greatest area.
/* 

const Nav = () => {

4
{
	navigate(-1) is going back one page, like a back button
	*/