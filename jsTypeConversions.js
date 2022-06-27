// Implicit Conversion - automatic type conversion
// Implicit Conversion to String
// numeric string used with + gives string type
let result;

result ='3'+2 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

// Implicit Conversion to Number
// numeric string used with - , / , * results number type
let m;

m = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

// Non-numeric String Results to NaN
//non-numeric string used with - , / , * results to NaN
let numb;

numb = 'hello' - 'world';
console.log(result); // NaN

numb = '4' - 'hello';
console.log(result); // NaN

// Implicit Boolean Conversion to Number
// if boolean is used, true is 1, false is 0

let bool;

bool = '4' - true;
console.log(bool); // 3

bool = 4 + true;
console.log(bool); // 5

bool = 4 + false;
console.log(bool); // 4

// null Conversion to Number
// null is 0 when used with number
let nulltype;

nulltype = 4 + null;
console.log(nulltype);  // 4

result = 4 - null;
console.log(nulltype);  // 4

// undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN
let undef;

undef = 4 + undefined;
console.log(undef);  // NaN

result = 4 - undefined;
console.log(undef);  // NaN

undef = true + undefined;
console.log(undef);  // NaN

undef = null + undefined;
console.log(undef);  // NaN


// Explicit Conversion - manual type conversion