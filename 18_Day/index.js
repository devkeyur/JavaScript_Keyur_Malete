// Example 1

var products = [
    {
        name: "TV",
        Category: "Electronics"
    },
    {
        name: "Nike Casuals",
        Category: "Footwear"
    },
    {
        name: "Mobile",
        Category: "Electronics",
    }
]

// products.filter(function (product) {
//     if (product.Category == "Electronics") {
//         document.write(`${product.name} <br>`)
//     }
// });


// using map method also

// products.filter(function (product) {
//     return product.Category == "Electronics"
// }).map(function (product) {
//     document.write(product.name + "<br>");
// });


// Using for of

// for (const product of products) {
//         if (product.Category == "Electronics") {
//             document.write(`${product.name} <br>`);
//         }
//     }

// Using for loop
for (let i = 0; i < products.length; i++) {
    if (products[i].Category == "Electronics") {
        document.write(products[i].name + "<br>");
    }
}