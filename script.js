const parseCode = (str) => {
  // your code here
	let parts = str.split('0');
	const filteredParts = parts.filter(part => part !== '');
	const [firstName, lastName, id] = filteredParts;
	return {
		firstName: firstName,
		lastName: lastName,
		id: id
	}
}; 

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
