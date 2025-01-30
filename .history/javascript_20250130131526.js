let calculator = {
    firstNumber : "",
    secondNumber : "",
    operator : "",
    display : document.getElementsByClassName("display")[0],
    clear : function(){
        this.firstNumber = "";
        this.secondNumber = "";
        this.operator = "";
        this.display.textContent = "";
    },
    add : function(){
        if(this.firstNumber === "")return;
        if(this.operator === ""){
            this.operator = "+";
            this.display.textContent += this.operator;
        }else{
            if(this.secondNumber === ""){
                this.operator = "+";
                this.display.textContent = this.firstNumber + this.operator;
                return;
            }
            this.operate();
            this.operator = "+";
            this.display.textContent += this.operator;
        }
    },
    subtract : function(){
        if(this.firstNumber === "")return;
        if(this.operator === ""){
            this.operator = "-";
            this.display.textContent += this.operator;
        }else{
            if(this.secondNumber === ""){
                this.operator = "-";
                this.display.textContent = this.firstNumber + this.operator;
                return;
            }
            this.operate();
            this.operator = "-";
            this.display.textContent += this.operator;
        }
    },
    multiply : function(){
        if(this.firstNumber === "")return;
        if(this.operator === ""){
            this.operator = "×";
            this.display.textContent += this.operator;
        }else{
            if(this.secondNumber === ""){
                this.operator = "×";
                this.display.textContent = this.firstNumber + this.operator;
                return;
            }
            this.operate();
            this.operator = "×";
            this.display.textContent += this.operator;
        }
    },
    divide : function(){
        if(this.firstNumber === "")return;
        if(this.operator === ""){
            this.operator = "÷";
            this.display.textContent += this.operator;
        }else{
            if(this.secondNumber === ""){
                this.operator = "÷";
                this.display.textContent = this.firstNumber + this.operator;
                return;
            }
            this.operate();
            this.operator = "÷";
            this.display.textContent += this.operator;
        }
    },
    percent : function(){
        if(this.firstNumber === "")return;
        if(this.operator != "")this.operate();
        this.firstNumber = (parseFloat(this.firstNumber)/100) + "";
        this.operator = "";
        this.secondNumber = "";
        this.display.textContent = this.firstNumber;
    },
    switchSigh : function(){
    if(this.firstNumber === "")return;
    if(this.operator != "")this.operate();
    this.firstNumber = (parseFloat(this.firstNumber)*(-1)) + "";
    this.operator = "";
    this.secondNumber = "";
    this.display.textContent = this.firstNumber;
    },
    operate : function(){
        if(this.secondNumber == "")return;
        if(this.operator === "+"){
        this.firstNumber = (parseFloat(this.firstNumber) + parseFloat(this.secondNumber)) + "";
        }else if(this.operator === "-"){
        this.firstNumber = (parseFloat(this.firstNumber) - parseFloat(this.secondNumber)) + "";
        }else if(this.operator === "×"){
        this.firstNumber = (parseFloat(this.firstNumber) * parseFloat(this.secondNumber)) + "";
        }else if(this.operator === "÷"){
            if(parseFloat(this.secondNumber) === 0){
                this.display.textContent = "0 division!!";
                setTimeout(this.clear.bind(this),5000);
                return;
            }else{
                this.firstNumber = (parseFloat(this.firstNumber)/parseFloat(this.secondNumber)) + "";
            }
        }
        this.display.textContent = this.firstNumber;
        this.operator = "";
        this.secondNumber = "";
    }
}

let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");

Array.from(numbers).forEach(number => {
    number.addEventListener('click', function() {
        if(calculator.operator === ""){
            calculator.firstNumber += number.textContent;
            calculator.display.textContent += number.textContent;
        }else{
            calculator.secondNumber += number.textContent;
            calculator.display.textContent += number.textContent;
        }
    });
});
    
Array.from(operators).forEach(op => {
    op.addEventListener('click', function () {
        if(op.textContent === "AC")calculator.clear();
        else if(op.textContent === "+")calculator.add();
        else if(op.textContent === "-")calculator.subtract();
        else if(op.textContent === "×")calculator.multiply();
        else if(op.textContent === "÷")calculator.divide();
        else if(op.textContent === "=")calculator.operate();
        else if(op.textContent === "%")calculator.percent();
        else calculator.switchSigh();
    });
});
    
    