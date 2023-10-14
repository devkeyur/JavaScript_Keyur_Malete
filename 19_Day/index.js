function f1() {
    document.querySelector("p").innerHTML = "1";
}

function f2() {
    document.querySelector("p").innerHTML = "2"
}

function f3() {
    document.querySelector("p").innerHTML = "3"
}

var fun1, fun2, fun3;
function bodyLoad() {
    fun1 = setTimeout(f1, 2000);
    fun2 = setTimeout(f2, 3000);
    fun3 = setTimeout(f3, 5000);
}
function CancelClick() {
    clearTimeout(fun2);
    console.warn(`You click on cancel`);
}

