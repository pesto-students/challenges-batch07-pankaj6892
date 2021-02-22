function duplicateLetters(...args) {

  const countArr = [];  // A constant array to store counter of values

  let argsArr = args[0].split(''); // splitting string

  argsArr = argsArr.sort(); // Sort array i.e. splitted string

  let counter = 0; // Counter for counting in the program

  for(let i=0; i<argsArr.length; i += counter) { //looping from starting to end with interval i + counter i.e. when new character starts
  	counter = 1;
  	for(let j=i+1; j<argsArr.length; j += 1){ // looping through array
  		if(argsArr[i] === argsArr[j]){
  			counter += 1;
  		}
  		else
  			break; // breaking the array when new value starts in array
  	}
  	countArr.push(counter); // adding the counter value in countArr array
  }

  const maxCount = Math.max(...countArr); // Finding max from array countArr array

  if(maxCount===1)

  	return false; // return false if no duplicate value is found

  return maxCount; // returning the total count of the letter with the most duplicates
}

export {
  duplicateLetters,
};