let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let display = document.getElementsByClassName("display")[0];
let firstNumber = "", secondNumber = "",operator = "";

Array.from(numbers).forEach(number => {
    number.addEventListener('click', function() {
        if(operator.textContent === ""){
            firstNumber += number.textContent;
            display.textContent = firstNumber;
        }else{
            secondNumber += number.textContent;
            display.textContent = secondNumber;
        }
    });
});


