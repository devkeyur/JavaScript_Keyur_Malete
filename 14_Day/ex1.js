var categories = [
    "All ",
    " Electronics",
    " Footwear",
    " Fashion",
    1,
    12,
    15
];

// Ex of toString() and join() method;
// document.write(
//     `To string : ${categories.toString()} <br>
//     Join : ${categories.join(" /  /")}
// `);

// let cat = categories.toString()

// console.log(categories)
// console.log(typeof (categories));

// console.log(cat);
// console.log(typeof (cat));


// Example of map()

// categories.map(function (value) {
    // document.write(`<p> ${value} </p>`)
//     console.log(value)
// });

// var num = [1,2,3,4,5];
// let doubleNumber = num.map(function (num) {
//     return num*2;
// });

// console.log(num);
// console.log(`--------------- after adding a map() -------------`);
// console.log(doubleNumber);


// ex of forEach()

// categories.forEach(function (value, index) {
//     document.writeln(`[${index} : ${value}] <br>`);
// });

// ex of slice()

// cat = categories.map(function(value){
//     return(`${value}`);
// })


// mapMethod = categories.slice(1,3).map(function (value) {
//     return(` ${value}`)
// })

// document.write(`Original Values are : ${cat} <br>`)
// document.write(`after use slice(1,3) : ${mapMethod} <br>`);


// Ex of find();

var sales = [5000,6000,3000,2600,43000];
// let result = sales.find(function (value) {
//     return value <= 7000
// });

// document.write(result);

// Ex of filter()

// sales.filter(function (value) {
//     return value <= 4000 || value >= 40000;
// }).map(function (value) {
//     document.write(`<li> ${value} </li>`)
// });

// onlyFilter = sales.filter(function (value) {
//     if (value <= 7000) {
//         document.write(` ${[value]}`);
//     }
// });


// document.write(`its using only filter : ${onlyFilter} <br>`);


// dynamically Creating HTML element and adding to page: