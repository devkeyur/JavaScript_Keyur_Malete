var cities = ["Delhi","Hyd","Mumbai","Gujarat"];

function LoadCities() {
    document.getElementById("lsCities").innerHTML = "";
    cities.map(function (city) {
        var option = document.createElement("option");
        option.text = city;
        option.value = city;
        document.getElementById("lsCities").appendChild(option);
    });
    document.getElementById("lblCount").innerHTML = `Total No of Cities : ${cities.length}`;
}

function bodyLoad() {
    LoadCities();
}

function AddClick() {
    var cityName = document.getElementById("txtCity").value;
    if(cities.indexOf(cityName)==-1){
        cities.push(cityName);
        LoadCities();
        alert(`${cityName} Added to List`);
        document.getElementById("txtCity").value = "";
    }else{
        alert(`${cityName} Exits in List`);
    }
}

function SortAsc() {
    cities.sort();
    LoadCities();
}

function SortDes() {
    cities.sort();
    cities.reverse();
    LoadCities();
}

function RemoveClick() {
    var selectedCity = document.getElementById("lsCities").value;
    var cityIndex = cities.indexOf(selectedCity);
    var flag = confirm(`Are you sure \n Want to Delete ${selectedCity}`);
    if (flag == true) {
        cities.splice(cities,1);
        LoadCities();
    }
}

function ClearClick() {
    var flag = confirm(`Are you sure you want to Delete All ?`)
    if (flag == true) {
        cities.length = 0;
        LoadCities();
    }
}
