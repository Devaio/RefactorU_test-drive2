// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';
 for(var i=0; i<arr.length-1; i++) {
  output += arr[i] + delimeter;
 }
 output+=arr[arr.length-1]
 return output;
};


var map = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  output.push(f(arr[i]));
 }
 return output;
};

var filter = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  if(f(arr[i])) {
   output.push(arr[i]);
  }
 }
   return output;
};