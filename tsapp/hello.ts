
// var <varName> = <value>; // in JS
// var <varName> :number = <value>; // in TS

var data: number = 10;
console.log('Data '+data);
data = 'Manish';
function addNumber(a:number , b: number) {
	return a+ b;
}
var result:number = addNumber(12, 10);
console.log('Sum value is '+result);

// TS Compiler