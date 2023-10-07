// Array methods & Property [Members]
// [Array manipulation]

// 1. Array Destructuring
//  - It is new from E5+ version.
//  - It allows to destructure array memory and split the values into individual references.
//  - You can avoid using the property or index reference.

// Syntax:
//     var values = [10, 20];
//     var [a, b] = values;            => a = 10, b = 20


// Ex 1

// var colors = [
//     'red',
//     'green',
//     'blue'
// ];

// const [fColor,sColor,tColor] = colors;

// document.write(`This is first color => ${fColor} <br> This is Second color => ${sColor} <br> This is Third Color => ${tColor}`);

// Ex 2

// var values = [
//     1,
//     "TV",
//     3400.44,
//     ["Gujarat ", " HYD"],
//     function () {
//         document.write("Hello Keyur");
//     }
// ];

// var [id, name, price, Cities, greet] = values

// document.write(
//     `id = ${id} <br>
//     Name = ${name} <br>
//     Price = ${price} <br>
//     Cities = ${Cities} <br>`
// );

// greet();

// Find the length;
// it returns the total count of elements in array

var values = [10,20,30];

document.write(`This is the length of array => ${values.length}`)