let length;
let width;

// Function for calculating area of a square
function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


// let grocery1;
// let grocery2; 
// let grocery3;

// function that adds up the groceries amounts
function groceryTracker(grocery1, grocery2, grocery3) {
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    let total = grocery1 + grocery2 + grocery3;
    document.getElementById('result2').innerText = `The total amount is: ${total}`;

}