var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';

new_string = numsArr[0];
for (var i = 1; i < numsArr.length; i++) {
	new_string += ',' + numsArr[i];
}

console.log(new_string.trim());