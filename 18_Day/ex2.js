// var topics = new Map();
// topics.set("HTML","it is a markup language");
// topics.set(2,"it configures styles");

// for (const item of topics.entries()) {
//     document.write(`${item} <br>`)
//     // console.log(item);
// }

// Ex of Date types

// var name = "samsung TV";
// var price = 34000.24;
// var Mfd = new Date("2023-01-23 11:10:34");
// var weekDays = ["sunday","Monday","Tuesday","Wed","Thu","Fri","Saturday"];
// var months = ["jan","feb","march","April","may","jun","july","aug","sept","Oct","Nov","Dec"];

// Mfd.setMonth(9);
// Mfd.setDate(14);

// document.write(`
//     Name = ${name} <br>
//     Price = ${price} <br>
//     mfd=${weekDays[Mfd.getDay()]} ${Mfd.getDate()}, ${months[Mfd.getMonth()]} ${Mfd.getFullYear()}
// `);

// Ex of timer events

// a) setTimeout()
//     b) clearTimeout()
//     c) setInterval()
//     d) clearInterval()


function timer() {
    var now = new Date();
    document.querySelector("p").innerHTML = now.toLocaleTimeString();
}

var clock;
function bodyLoad() {
    clock = setInterval(timer,1000);
}

function StopClick() {
    clearInterval(clock);
}

function StartClick() {
    bodyLoad();
}

// Simple Example

var now = new Date();
var hrs = now.getHours();

if (hrs>=0 && hrs <=12) {
    document.write("Good Morning");
}else if (hrs > 12 && hrs <= 16) {
    document.write("Good Afternoon");
}else if (hrs > 16 && hrs <=23) {
    document.write("Good Evening");
}