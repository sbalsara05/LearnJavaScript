function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let multiplicationResult = multiply(num1, num2);
        let additionResult = addition(num1, num2);
        let divisionResult = division(num1, num2);
        let subtractionResult = subtraction(num1, num2)
        displayResult(additionResult);
        displayResult(divisionResult);
        displayResult(subtractionResult);
        displayResult(multiplicationResult);


    }
    else {
        displayResult("Please Enter Valid Numbers")
    }

    function multiply(a,b) {
        debugger;

        return a*b;
    }

    function division(a,b) {
        if (b>0) {
            return a/b
        }
        else {
            alert('Denominator must be greater than 0')
        }
    }

    function addition(a,b) {
        return a +b;
    }

    function subtraction(a,b) {
        return a-b;
    }



    function displayResult(result) {
        var resultElement = document.getElementById('result')
        resultElement.textContent = `The result is: ${result}`
    }

}