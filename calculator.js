// we use .reduce to make sure that the addition function works on more than two numbers
function addMultiple(... args){
    return args.reduce(function(acc, cur) {
        return acc + cur;
    })
}

function subtractMultiple(... args){
    return args.reduce(function(acc, cur) {
        return acc - cur;
    })
}

function multiplyMultiple(... args){
    return args.reduce(function(acc, cur) {
        return acc * cur;
    })
}

function divideMultiple(... args){
    return args.reduce(function(acc, cur) {
        return acc / cur;
    })
}

var no1;
var no2;
var op;


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