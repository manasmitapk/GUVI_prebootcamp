var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var count;
for (var i=0; i<=numsArr.length; i++) {
 if(i %2 === 0 )
 {
 numsArr[i] = "even";
 count += "," + numsArr[i];
 } 
}
console.log(numsArr);