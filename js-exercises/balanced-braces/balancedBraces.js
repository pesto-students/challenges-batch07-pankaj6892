function balancedBraces(str){
  let bracesStack = [];

  let openingBraces = {
      '{': '}',
      '[': ']',
      '(': ')'
  };

  let closingBraces = {
      '}': true,
      ']': true,
      ')': true
  }

  for (let i = 0; i < str.length; i++) {

      let char = str[i];

      if (openingBraces[char]) {
          bracesStack.push(char);
      } else if (closingBraces[char]) {
          if (openingBraces[bracesStack.pop()] !== char) return false;
      }
  }
  return bracesStack.length === 0;
}

export {
  balancedBraces,
};
