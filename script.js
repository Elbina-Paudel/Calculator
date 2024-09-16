function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        // Eval the sanitized expression to avoid errors
        let sanitizedExpression = expression.replace(/[^-()\d/*+.Math.sqrtMath.powMath.sinMath.cosMath.tanMath.log]/g, '');
        let result = eval(sanitizedExpression);  // Use eval to calculate the expression

        if (result !== undefined) {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        shakeCalculator();
        document.getElementById('display').value = 'Error';  // Display error if invalid expression
    }
}

function shakeCalculator() {
    const calculator = document.querySelector('.calculator');
    calculator.style.animation = 'shake 0.5s';
    setTimeout(() => {
        calculator.style.animation = '';
    }, 500);
}
