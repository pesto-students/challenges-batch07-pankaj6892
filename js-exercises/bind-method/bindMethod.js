function bind(fn, obj) {
  return function bindValues(...args){
  		return fn.apply(obj, args);
  };
}

module.exports = { bind };
