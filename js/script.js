document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');
    const calculationOutput = document.getElementById('calculationOutput');

    function convertTemperature() {
        console.log('Convert button clicked');
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = parseFloat(fahrenheitInput.value);
        let calculationText = '';

        console.log('Celsius input:', celsiusInput.value);
        console.log('Fahrenheit input:', fahrenheitInput.value);

        if (!isNaN(celsius) && celsiusInput.value !== '') {
            console.log(`Converting ${celsius}°C to Fahrenheit`);
            const convertedFahrenheit = (celsius * 9 / 5) + 32;
            fahrenheitInput.value = convertedFahrenheit.toFixed(2);
            calculationText = `${celsius}°C * 9/5 + 32 = ${convertedFahrenheit.toFixed(2)}°F`;
        } else if (!isNaN(fahrenheit) && fahrenheitInput.value !== '') {
            console.log(`Converting ${fahrenheit}°F to Celsius`);
            const convertedCelsius = (fahrenheit - 32) * 5 / 9;
            celsiusInput.value = convertedCelsius.toFixed(2);
            calculationText = `(${fahrenheit}°F - 32) * 5/9 = ${convertedCelsius.toFixed(2)}°C`;
        } else {
            alert('Please enter a valid number in one of the fields.');
            return;
        }

        console.log('Calculation text:', calculationText);
        calculationOutput.value = calculationText;
    }

    function resetFields() {
        console.log('Reset button clicked');
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        calculationOutput.value = '';
    }

    function reverseFields() {
        console.log('Reverse button clicked');
        const tempCelsius = celsiusInput.value;
        celsiusInput.value = fahrenheitInput.value;
        fahrenheitInput.value = tempCelsius;
    }

    convertButton.addEventListener('click', convertTemperature);
    resetButton.addEventListener('click', resetFields);
    reverseButton.addEventListener('click', reverseFields);
});