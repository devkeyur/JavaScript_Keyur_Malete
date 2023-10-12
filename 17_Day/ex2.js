// Array of Objects
// - Array can configure multiple objects.
// - Usually data is returned from API as Object or Array.
// - Complex data is configured in the form of "Array of Objects".

// Syntax:
//      [
//        {                [0] => Object
//        },
//       {                [1] => Object
//       }
//     ]



function FetchClick() {
    fetch("../data/products.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (products) {
            products.map(function (product) {
                var tr = document.createElement("tr");
                var tdSr = document.createElement("td")
                var tdName = document.createElement("td");
                var tdPrice = document.createElement("td");
                var tdRating = document.createElement("td");
                var tdImage = document.createElement("td");

                tdSr.innerHTML = product.id;
                tdName.innerHTML = product.title;
                tdPrice.innerHTML = product.price;
                tdRating.innerHTML = product.rating.rate;
                tdImage.innerHTML = `<image src=${product.image} width="100" height="100">`

                tr.appendChild(tdSr);
                tr.appendChild(tdName);
                tr.appendChild(tdPrice);
                tr.appendChild(tdRating);
                tr.appendChild(tdImage);

                document.querySelector("tbody").appendChild(tr);
            })
        })
}