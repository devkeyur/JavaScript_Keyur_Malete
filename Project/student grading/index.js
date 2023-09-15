// function for calculate
const calculate = () => {
    // get the input from user
    let web = document.getElementById("web").value;
    let App = document.getElementById("App").value;
    let php = document.getElementById("php").value;
    let python = document.getElementById("python").value;
    let java = document.getElementById("java").value;
    let c = document.getElementById("c").value;
    let grades = "";

    // input is string so typecasting is necessary

    let totalgrades = parseFloat(web) + parseFloat(App) + parseFloat(php) + parseFloat(python) + parseFloat(java) + parseFloat(c);

    // check the condition for the providing the grade to students
    let percentage = (totalgrades / 600) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B"
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F"
    }

    // Checking the values are empty or not

    if (web == "" || App == "" || php == "" || python == "" || java == "" || c == "") {
        document.getElementById("showdata").innerHTML = "Please enter all the fields"
    } else {
        //  checking the condition for the fail and pass

        if (percentage >= 39.5) {
            document.getElementById("showdata").innerHTML = `Out of 400 your total is ${totalgrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. <br> <b> You are Pass. <b>`;
            document.getElementById("showdata").style.background = "black";
            document.getElementById("showdata").style.color = "white";
        } else {
            document.getElementById("showdata").innerHTML = `Out of 400 your total is ${totalgrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. <br> You are Fail.`;
        }
    }
};