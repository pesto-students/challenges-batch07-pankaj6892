
function removeFalsyValues(array) {

  if(typeof array !== 'object')
    return false;

  return array.filter(a => !!a);
}

export {
  removeFalsyValues,
};
