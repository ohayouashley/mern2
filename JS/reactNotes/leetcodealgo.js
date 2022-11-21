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

//?Given a string s find the length of the longest substring without repeating the characters. 

var lengthOfLongestSubstring = function(s) {
	//1. initialize two pointers to create a window
	let start = 0
	//2. create an object to keep track of everything we've seen
	let seen = {}
	let max = 0
	//3. loop through the string until we find a repeated character
	for (let end = 0; end<s.length;end++) {
		let current = s[end]
		seen[current] = end //*what are the two possible scenarios of each loop. 
		//*if we've seen this character before
		if(seen[current]){
			start++
			delete seen[start]
		}
		
		//*if this is a unique character
	} else {
		max++
	}
return max

}