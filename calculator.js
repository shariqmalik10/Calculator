let display = document.getElementById("calculator-screen");
let btnWrapper = document.getElementById('noBtnContainer')



var arg1;
var arg2;
var op;
var result;

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
        return subtract(no1, no2);
    }

    else if (op==="*"){
        return multiply(no1, no2);
    }

    else if (op==="/"){
        return multiply(no1, no2);
    }
}

function buttonPress() {
    btnWrapper.addEventListener('click', (event)=> {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        // return event.target.value;
        updateDisplay(event.target.value);
        
    })
}

function updateDisplay(button){
    // do not want display to show equal sign 
    if (button != "=" && (no1 === null || no2 === null)){
        display.value += button;
    }
}
    

//updating calculator screen 

// btnWrapper.addEventListener('click', (event) => {
//   const isButton = event.target.nodeName === 'BUTTON';
//   if (!isButton) {
//     return;
//   }
//   output.value = event.target.value;

// //   console.dir(event.target.value);
// })

// function updateInput(){
//     btnWrapper.addEventListener('click', (event) => {
//         const isButton = event.target.nodeName === 'BUTTON';
//         if (!isButton) {
//           return;
//         }
//         output.value = event.target.value;
//         no1 = parseFloat(event.target.value); 
      
//       //   console.dir(event.target.value);
//     })
// }

buttonPress();