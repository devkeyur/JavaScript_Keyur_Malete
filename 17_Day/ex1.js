// Reading all Keys

// ex1.

// fetch("../data/product.json").then(function (response) {
//     return response.json();
// }).then(function (product) {
//     for (const key in product) {
//         document.write(`${key} <br>`);
//         }
//     }
// );

// document.write("Hello")

// ex2.
// fetch("../data/product.json")
// .then(function (Keyur) {
//     return Keyur.json();
// })
// .then(function (product) {
//     for(var property in product){
//         document.write(`${property} <br>`)
//     }
// })

// fetch("../data/product.json")
// .then(function (response) {
//     return response.json();
// })
// .then(function (product) {
//     Object.keys(product).map(function (key) {
//         document.write(`${key} <br>`)
//     })
// })


// 4. How to know the data type of Key and Value in object?
// A. By using for..in  or Object.keys(). To know data type you have to use "typeof" operator.

// fetch("../data/product.json")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (product) {
//         Object.keys(product).map(function (key) {
//             document.write(`${key}: ${typeof product[key]} <br>`);
//         })
//     })


    // fetch("../data/products.json")
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (products) {
    //     Object.keys(products).map(function (key) {
    //         document.write(`${key}: ${typeof products[key]} <br>`);
    //     })
    // })