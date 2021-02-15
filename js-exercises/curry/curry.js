function curry(fn){
  return function curriedValue(...args){
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }

      return function (...argNext) {
        return curriedValue.apply(this, args.concat(argNext));
      }
    }
}

export {
  curry,
};
