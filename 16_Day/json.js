function bodyLoad() {
    fetch("../data/product.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (product) {
            document.getElementById("prodImg").src = product.Photo;
            document.getElementById("title").innerHTML = `${product.Title}`;
            document.getElementById("rating").innerHTML = `
            <span class="bg-success text-white p-2 rounded">${product.Rating.Rate} <span class="bi bi-star-fill"></span></span>
            <span class="fw-bold ps-3"> ${product.Rating.count} Rating & ${product.Rating.Reviews} Reviews </span>`;

            product.Features.map(function(feature) {
                var li = document.createElement("li");
                li.innerHTML = feature;
                document.querySelector("ul").appendChild(li);
            });
            document.getElementById("price").innerHTML = `&#8377; ${product.Price}`
        })
}