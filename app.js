//! So sanh `==` va `===`
var one = 2;
var one_number = 2;
var one_string = "2";
console.log(one ==  one_number);  // int == int =>true
console.log(one === one_number);  // int ==== int =>true
console.log(one ==  one_string); // int == string => true
console.log(one === one_string); // int == string => false
//! map
var arr_map = [4, 2, 5, 8];
var maped = arr_map.map(item => item * 3);
console.log(maped);
//! filter
var arr_filter = [0, 12, 3, 4];
var filtered = arr_filter.filter(item => item % 3 === 0);
console.log(filtered); 
//! reduce
var arr_3 = [19, 12, 5, 2];
var sum = arr_3.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); 
//! Some
console.log(arr_3.some(checkItem));
function checkItem(item) {
  return item < 1;
}
//!find
console.log(arr_3.find(findItem));
function findItem(item) {
  return item > 11;
}

//!push,pop,unshift
var arr = ['First item', 'Second item', 'Third item'];
arr.push('Fourth item');
console.log(arr);
arr.unshift('Zerost item');
console.log(arr);
arr.pop();
console.log(arr);


