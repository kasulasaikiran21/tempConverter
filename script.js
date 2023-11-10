function convert() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (unit === "celsius") {
        resultElement.innerHTML = temperature + "°C = " + celsiusToFahrenheit(temperature) + "°F";
    } else if (unit === "fahrenheit") {
        resultElement.innerHTML = temperature + "°F = " + fahrenheitToCelsius(temperature) + "°C";
    } else if (unit === "kelvin") {
        resultElement.innerHTML = temperature + " K = " + kelvinToCelsius(temperature) + "°C";
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
