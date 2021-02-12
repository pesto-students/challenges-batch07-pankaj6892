const sumEvenArgs = (...args) => {
  
  if(typeof args[0] !== 'number')
  	return 0;

  let sumOfEvenArgs=0;

  for(let i=0; i<=args.length;i++){
  	if(args[i]%2===0)
  		sumOfEvenArgs += args[i];
  }

  return sumOfEvenArgs;
};

export { sumEvenArgs };