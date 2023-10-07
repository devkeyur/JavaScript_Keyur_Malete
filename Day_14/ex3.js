function bodyLoad() {
    var home = document.createElement("button");
    home.innerHTML = "Home";
    document.querySelector("nav").appendChild(home);

    var contact = document.createElement("button");
    contact.innerHTML = "Contact";
    document.querySelector("nav").appendChild(contact);

    var pic = document.createElement("img");
    pic.src = "../images/food.jpg"
    pic.width = "100";
    pic.height = "100";

    var caption = document.createElement("figcaption");
    caption.innerHTML = "Gujarati Thali";

    document.querySelector("figure").appendChild(pic);
    document.querySelector("figure").appendChild(caption);

    var input = document.createElement("input");
    input.type = "Button";
    input.value = "Register";

    document.getElementById("container").appendChild(input);
}