var values = [1, "TV", true, ["Delhi", "Gujarat"], prompt("Enter Price"), function () { document.write("Hello From Array") }, "Is goo Tv"];

document.write(`
    id : ${values[0]} <br>
    Name : ${values["TV"]} <br>
    Stock : ${values[2]} <br>
    Cities : ${values[3][0]},${values[3][1]} <br>
    Price : ${parseFloat(values[4])} <br>
    Rating:${values["6"]} <br>
`);
values[5]();