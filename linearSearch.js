const array = [2, 6, 3, 5, 8, 1, 4];
let count = 0;

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 6));
console.log("count =", count);
