
var no1;
var no2;
var op;

//variable storing value currently displayed
var displayed;


// normal calculation with onyl 2 numbers 
function add(arg1, arg2) {
    return arg1+arg2;
}

function subtract(arg1, arg2) {
    return arg1-arg2;
}

function multiply(arg1, arg2) {
    return arg1*arg2;
}

function divide(arg1, arg2) {
    return arg1/arg2;
}

//operate 
function operate(no1, no2, op){
    if (op==="+"){
        return add(no1, no2);
    }

    else if (op==="-"){
        return subtract(no1, no2)
    }

    else if (op==="*"){
        return multiply(no1, no2)
    }

    else if (op==="/"){
        return multiply(no1, no2)
    }
}

