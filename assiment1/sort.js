
function arraySortedOrNot(arr, n)
{
	if (n == 0 || n == 1)
		return 1;

	if (arr[n - 1] < arr[n - 2])
		return 0;
	return arraySortedOrNot(arr, n - 1);
}
let arr = [ 20,33,44,55,66,77,42 ];
let n = arr.length;

if (arraySortedOrNot(arr, n) != 0)
	console.log("Yes");
else
console.log("No");


