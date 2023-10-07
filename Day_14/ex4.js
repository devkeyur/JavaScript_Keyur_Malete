// ex of dynamic adding tables

// function bodyLoad() {
//     var tr = document.createElement("tr");
//     var td = document.createElement("td");
//     td.innerHTML = "Samsung TV"
//     tr.appendChild(td);
//     document.querySelector("tbody").appendChild(tr);
// }

// dynamic adding lists

// function bodyLoad() {
//     var ol = document.createElement("ol");
//     var item1 = document.createElement("li");
//     var item2 = document.createElement("li");
//     var item3 = document.createElement("li");

//     item1.innerHTML = "HTML";
//     item2.innerHTML = "CSS";
//     item3.innerHTML = "JavaScript";

//     ol.appendChild(item1);
//     ol.appendChild(item2);
//     ol.appendChild(item3);

//     document.querySelector("div").appendChild(ol);
// }


// Find the largest number;

// let [num1, num2, num3] = [20, 50, 30];

// function largNum() {
//     let largNum = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);

//     // let largNum;
//     // if (num1 > num2) {
//     //     if (num1 > num3) {
//     //         largNum = num1;
//     //     } else {
//     //         largNum = num3;
//     //     }
//     // } else {
//     //     if (num2 > num3) {
//     //         largNum = num2;
//     //     } else {
//     //         largNum = num3;
//     //     }
//     // }

//     return largNum;
// }

// console.log(largNum());


var topics = ["HTML", "CSS", "BootStrap", "JavaScript", "NodeJS"]

// from array to adding
// function bodyLoad() {
//     var ol = document.createElement("ol");
//     topics.map(function (value) {
//         var li = document.createElement("li");
//         li.innerHTML = value;
//         ol.appendChild(li);
//     })
//     document.querySelector("div").appendChild(ol);
// };

// 2nd ex

// function bodyLoad() {
//     var select = document.createElement("select");
//     topics.map(
//         function (value) {
//             var option = document.createElement("option");
//             option.text = value;
//             option.value = value;
//             select.appendChild(option);
//         }
//     )
//     document.querySelector("div").appendChild(select);
// }

// 1. Create a Table with rows for every course.
// 2. Create a Hyperlink for course and link must be added into ordered list.
// 3. Create a list of checkboxes for every course.

// - To read elements from array you can also use loops and external iteration statements.
// - Loops are created by using for, while, do while statements.

// Syntax:
// for(initialization; condition; counter)
// {

// }



var categories = ["All","Electronics","Footwear"];

// for (let i = 0; i < categories.length; i++) {
//     document.write(categories[i] + "<br>")
    
// }

// to find a property in categories and value of categories
for(var property in categories){
    document.write(`<li> ${property} <br>`)
}

document.write("--------------------------")

for (const value of categories) {
    document.write(`<li> ${value} <br>`);
}

document.write("-------------------------- <br>")

for(var property in categories){
    document.write(`[${property}] : ${categories[property]} <br>`)
}