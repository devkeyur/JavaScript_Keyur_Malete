const dropList = document.querySelectorAll(".drop-list select");
fromCurrency = document.querySelector(".from select");
toCurrency = document.querySelector(".to select")
const getButton = document.querySelector("form button");
const apiKey = "0b53f123bf14db9614327c69";


for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_code) {
        // Selecting INR by default as From currency and USD as to currency
        let selected;
        if(i == 0){
            selected = currency_code == "INR" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "USD" ? "selected" : "";
        }
        // creating a option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;

        // inserting option tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target); // Calling loadFlag with passing target element as an argument
    })

    function loadFlag(element) {
        for(code in country_code){
            if(code == element.value){ // if currency code of country list is = to option value
                let imgTag = element.parentElement.querySelector("img"); // selecting flag for perticular drop list
                imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`
            }
        }
    }
}

window.addEventListener("onload", ()=>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault(); // Preventing form from submitting
    getExchangeRate();
});

const exchangeIcon = document.querySelector(".drop-list .bi");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value; // temp currency code of from droplist
    fromCurrency.value = toCurrency.value; // passing to currency code to from currency code
    toCurrency.value = tempCode; // passing temp currency code to currency code
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    const exchangeRateTxt = document.querySelector(".exchange-rate");
    let amountVal = amount.value;

    //  if user don't enter a value or enter 0 then we'll put 1 value by default
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }

    exchangeRateTxt.innerText = "Getting Rate.."
    let url = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;

    // fetching api response and returning it with parsing into js obj and in another then method receiving that obj
    fetch(url).then(Response => Response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        // console.log(exchangeRate);
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        // console.log(totalExchangeRate);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;

    }).catch(() => {
        //  if user getting some error or offline
        exchangeRateTxt.innerText = "Something went wrong..."
    });
}





// console.log("for loop")

// let name = ["Keyur", "Sumit", "Rahul", "Vishal"];

// Traditional For loop
// for (let i = 0; i< name.length; i++) {
//     const element = name[i];
//     console.log(element)
// }


// For In loop

// obj = {
//     name : "Keyur",
//     language: "JavaScript",
//     hobbies: "Coding"
// };

// // console.log(obj)

// for(let key in obj){
//     console.log(obj[key])
// }