// - Object can contain logic, which is defined using function

//         {
//           Key : function() {

//            }
//          }
// - You can access the members of object within object by using "this" keyword.

var tv = {
    "name": "Samsung TV",
    "Price": 45000.90,
    "Qty": 0,
    "Stock": true,
    "cities": ["Delhi", "HYD", "Gujarat"],
    "Rating": {"Rate": 4.2,"count": 3400},
    "Total": function () {
        return this.Qty * this.Price;
    },
    "Final": function () {
        document.write(`
            Name = ${this.name} <br>
            Price = ${this.Price} <br>
            Stock = ${this.Stock} <br>
            Cities = ${this.cities.join(" / ")} <br>
            Rating = ${this.Rating.Rate} [${this.Rating.count}] <br>
            QTY = ${this.Qty} <br>
            Total = ${this.Total()} <br>
        `);
    }
}

tv.Qty = parseInt(prompt("Enter Quantity"));
tv.Final();
