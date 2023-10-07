// Example of checkbox

var categories = ["All", "Electronics", "Footwear"];
// function bodyLoad() {
//     categories.map(function (category) {
//         var li = document.createElement("li");
//         var input = document.createElement("input");
//         input.type = "checkbox";
//         var label = document.createElement("label");
//         label.innerHTML = category;

//         li.appendChild(input);
//         li.appendChild(label);

//         document.querySelector("ul").appendChild(li);
//     });
// }

// second way to create

function bodyLoad(){
    categories.map(function (category) {
        var li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"><label>${category}</label>`;
        document.querySelector("ul").appendChild(li);
    })
}