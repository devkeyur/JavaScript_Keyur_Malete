var tv = {
    "name": "Samsung TV",
    "Price": 45000.90,
    "Stock": true,
    "cities": ["Delhi", "HYD", "Gujarat"],
    "Rating": {
        "Rate": 4.2,
        "count": 3400
    }
}

document.write(` ------- Product Details ------ <br><br>
    Name = ${tv.name} <br>
    Price = ${tv.Price} <br>
    Stock = ${tv.Stock} <br>
    Cities = ${tv.cities.join(" / ")} <br>
    Rating = ${tv.Rating.Rate} [${tv.Rating.count}] <br>
`);