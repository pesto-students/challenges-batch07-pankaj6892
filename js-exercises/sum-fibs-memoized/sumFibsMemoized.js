function sumFibs(num) {

  if(typeof num !== 'number'|| num<1)
  	return false;
  let firstVal = 1;
  let nextVal = 1;
  let sum = 1;  // As we are looping on the basis of nextVal so adding firstVal in sum initially
  let temp;

  while(nextVal<=num){

  	//console.log(nextVal);

  	if(nextVal%2 !== 0)
  		sum += nextVal;

  	temp = firstVal + nextVal;

  	firstVal = nextVal;
  	nextVal = temp;

  }

  return sum;
}

function cacheFunction(fn) {
	const cache = {};
	return function (n) {
		if (n in cache) {
			return cache[n];
		}

		cache[n] = fn(n);
		return cache[n];
	};
}

export { sumFibs, cacheFunction };
