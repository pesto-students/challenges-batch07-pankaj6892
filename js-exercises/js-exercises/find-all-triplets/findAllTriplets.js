function findAllTriplets(arr, sum) {
  let errorFlag = false;
  const tripletArray = [];
  const arrayLength = arr.length;

  if (!Array.isArray(arr)) errorFlag = true;
  if (arrayLength <= 3) errorFlag = true;
  if (typeof sum !== 'number') errorFlag = true;

  for (const element of arr) {
    if (Number.isNaN(element)) {
      errorFlag = true;
    }
  }

  if (errorFlag) throw new Error('Invalid Parameter');

  for (let i = 0; i < arrayLength; i += 1) {
    for (let j = i + 1; j < arrayLength; j += 1) {
      for (let k = j + 1; k < arrayLength; k += 1) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          tripletArray.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return tripletArray;
}

export { findAllTriplets };
