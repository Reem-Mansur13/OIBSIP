document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    const resultText = document.getElementById('resultText');

    if (isNaN(tempInput)) {
        resultText.textContent = "Please enter a valid number!";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unitSelect === 'celsius') {
        celsius = tempInput;
        fahrenheit = (tempInput * 9/5) + 32;
        kelvin = tempInput + 273.15;
    } else if (unitSelect === 'fahrenheit') {
        celsius = (tempInput - 32) * 5/9;
        fahrenheit = tempInput;
        kelvin = celsius + 273.15;
    } else if (unitSelect === 'kelvin') {
        celsius = tempInput - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = tempInput;
    }

    resultText.innerHTML = `
        Celsius: ${celsius.toFixed(2)} °C <br>
        Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>
        Kelvin: ${kelvin.toFixed(2)} K
    `;
});
