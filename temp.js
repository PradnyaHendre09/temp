const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", () => {
    const tempInput = document.getElementById("tempInput").value;
    const unit = document.getElementById("unit").value;
    let result = "";

    if (isNaN(tempInput)) {
        alert("Please enter a valid number");
        return;
    }

    if (unit === "Celsius") {
        result = (tempInput * 9 / 5) + 32;
        document.getElementById("result").value = result.toFixed(2) + " °F";
    } else if (unit === "Fahrenheit") {
        result = (tempInput - 32) * 5 / 9;
        document.getElementById("result").value = result.toFixed(2) + " °C";
    } else if (unit === "Kelvin") {
        result = parseFloat(tempInput) + 273.15;
        document.getElementById("result").value = result.toFixed(2) + " K";
    }
});
