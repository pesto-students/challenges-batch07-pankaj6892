import { isString } from "util";

function abbreviateString(str) {

	if(isString(str)){    //Checking if the type of str is string
		
		let splitStr = str.trim().split(" ");  // Splitting the words of str in an array

		if(splitStr.length > 1)  // Checking if array contains more than one word i.e. str having more than one word
			
			return (splitStr[0] + " " + splitStr[splitStr.length-1].charAt(0).toUpperCase() + ".");
		
		else
			
			return splitStr[0];

	}
	else
	  throw new Error('Invalid Parameters'); // Throwing error in case of str is not a string
}

export { abbreviateString };
