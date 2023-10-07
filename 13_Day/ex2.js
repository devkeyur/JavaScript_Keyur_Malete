// - You can store any type of data in array
//     a) Primitive
//     b) Non-Primitive
//     c) Function


// ex 1
// var values = [1, "TV", true, ["Delhi", "Gujarat"], prompt("Enter Price"), function () { document.write("Hello From Array") }, "Is goo Tv"];

// document.write(`
//     id : ${values[0]} <br>
//     Name : ${values["TV"]} <br>
//     Stock : ${values[2]} <br>
//     Cities : ${values[3][0]},${values[3][1]} <br>
//     Price : ${parseFloat(values[4])} <br>
//     Rating:${values["6"]} <br>
// `);
// values[5]();


// ex 2

// var values = [
//     1,
//     [
//         ["Electronics", "Fashion"],
//         ["Delhi", "Hyd"]
//     ]
// ];
// document.write(values[1][1]);
// console.log(values[1][0]);


// ex3

var values = [
    1,
    [
        ["Electronic", "Fashion"],
        ["Delhi", "HYD"],
        [
            true,
            function () {
                document.write("\n Hello From Array");
            }
        ]
    ],
    [
        ["Kem cho", "Vadodara"]
    ]
];
values[1][1][1] = "Gujarat";
values[1][1][2] = "Keyur";

document.write(values[1][1][1] + "<br>" + values[1][1][2] + "<br>" + values[2][0][0] + "<br>");
values[1][2][1]();