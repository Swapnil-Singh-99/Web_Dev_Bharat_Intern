document.getElementById("convertBtn").addEventListener("click", function() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const resultElement = document.getElementById("result");

    if (inputUnit === "celsius") {
        const fahrenheit = (inputTemp * 9/5) + 32;
        resultElement.textContent = `${inputTemp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (inputUnit === "fahrenheit") {
        const celsius = (inputTemp - 32) * 5/9;
        resultElement.textContent = `${inputTemp}°F is equal to ${celsius.toFixed(2)}°C`;
    }
});
