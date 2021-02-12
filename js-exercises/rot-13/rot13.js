function rot13(encodedStr) {
  
  if(typeof encodedStr !== 'string') return false;
  let decodedCode = ""; 
  
  for(let c of encodedStr){
	
	let asciiValue = c.charCodeAt(0);
	if(asciiValue >= 65 && asciiValue <=90)
		asciiValue -= 13;
	if(asciiValue < 65)
		asciiValue = 90 - (65 - asciiValue);
	
	decodedCode += String.fromCharCode(asciiValue);
  }
  
  console.log(decodedCode);
  return decodedCode;
}

export {
  rot13,
};
