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
            if(this.secondNumber === "")return;
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
            if(this.secondNumber === "")return;
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
            if(this.secondNumber === "")return;
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
            if(this.secondNumber === "")return;
            this.operate();
            this.operator = "÷";
            this.display.textContent += this.operator;
        }
    },
}

