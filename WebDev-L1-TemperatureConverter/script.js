document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInputVal = document.getElementById('tempInput').value.trim();
    const unitSelect = document.getElementById('unitSelect').value;
    const resultText = document.getElementById('resultText');

    // 1. Validation for Non-numeric or Empty Input
    if (tempInputVal === '' || isNaN(tempInputVal)) {
        resultText.style.color = '#e74c3c';
        resultText.innerHTML = '⚠️ Please enter a valid numeric temperature!';
        return;
    }

    const tempInput = parseFloat(tempInputVal);

    // 2. Absolute Zero Validation Handling
    if (
        (unitSelect === 'celsius' && tempInput < -273.15) ||
        (unitSelect === 'fahrenheit' && tempInput < -459.67) ||
        (unitSelect === 'kelvin' && tempInput < 0)
    ) {
        resultText.style.color = '#e74c3c';
        resultText.innerHTML = '⚠️ Temperature cannot be below Absolute Zero (-273.15°C / -459.67°F / 0 K)!';
        return;
    }

    // Reset color for correct results
    resultText.style.color = '#2d3436';

    let celsius, fahrenheit, kelvin;

    // Conversion Logic
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

    // Output Display showing all units simultaneously with correct labels
    resultText.innerHTML = `
        <strong>Celsius (°C):</strong> ${celsius.toFixed(2)} °C <br>
        <strong>Fahrenheit (°F):</strong> ${fahrenheit.toFixed(2)} °F <br>
        <strong>Kelvin (K):</strong> ${kelvin.toFixed(2)} K
    `;
});
