function getTotalTime(passcode, keypadStr) {
  const keypadStrArray = [...keypadStr];
  let counter = 0;
  let initialpassKeyIndex = keypadStrArray.indexOf([...passcode][0]);

  [...passcode].forEach((value) => {
    const passKeyIndex = keypadStrArray.indexOf(value);

    if (initialpassKeyIndex !== passKeyIndex) {
      if (
        Math.abs(
          Math.floor(initialpassKeyIndex / 3) - Math.floor(passKeyIndex / 3),
        ) === 2
      ) {
        counter += 2;
      } else if (
        Math.abs((initialpassKeyIndex % 3) - (passKeyIndex % 3)) === 2
      ) {
        counter += 2;
      } else counter += 1;
    }

    initialpassKeyIndex = passKeyIndex;
  });
  return counter;
}

export { getTotalTime };
