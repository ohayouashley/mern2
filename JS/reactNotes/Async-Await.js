//async/await replaces .then and .catch()

const apiCall = async () => {
	try {
		const result = await axios.get("url..."); //storing in a variable called result
		setCats(result.data);
	} catch (error) {
		console.log(error);
	}
}; //still need to handle a success/failure scenario

return (
	<div>
		<button onClick={apiCall}>API call</button>
	</div>
);
