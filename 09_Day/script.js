function VerifyName() {
    var userName = document.getElementById("txtname").value;
    var nameError = document.getElementById("nameError");
    if (userName.length == 0) {
        nameError.innerHTML = "Username Required".fontcolor('red');
    } else {
        if (userName.charAt(0)=="A") {
            nameError.innerHTML = "";
        }else{
            nameError.innerHTML = "Name must start with 'A'".fontcolor('blue');
        }
    }
}
