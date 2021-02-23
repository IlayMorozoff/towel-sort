
// You should implement your task here.
module.exports = function towelSort(matrix) {

  let newArray = [];

  if (Array.isArray(matrix) && matrix.length !== 0) {

    for (let i = 0; i < matrix.length; i++) {

      if (i % 2 == 0) {
        newArray = newArray.concat(matrix[i]);
      } else if (i % 2 !== 0) {
        newArray = newArray.concat(matrix[i].reverse());
      } else {
        return newArray;
      }
    }
  }
  return newArray;
};