import _ from 'lodash';
const deepCopyObject = objToCopy => {
  const objCopy = _.cloneDeep(objToCopy);
  return objCopy;
};

export { deepCopyObject };
