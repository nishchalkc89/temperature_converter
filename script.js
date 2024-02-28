document.getElementById("convertButton").addEventListener("click", function () {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    let convertedValue;

    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
        convertedValue = (inputValue * 9/5) + 32;
    } else if (unitFrom === "celsius" && unitTo === "kelvin") {
        convertedValue = inputValue + 273.15;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
        convertedValue = (inputValue - 32) * 5/9;
    } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
        convertedValue = (inputValue - 32) * 5/9 + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "celsius") {
        convertedValue = inputValue - 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
        convertedValue = (inputValue - 273.15) * 9/5 + 32;
    } else {
        convertedValue = inputValue; // Same unit, no conversion needed
    }

    document.getElementById("outputValue").textContent = convertedValue.toFixed(2);
});