/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
};

function addNumbers(){
   let number1 = Number(document.querySelector('#add1').value);
   let number2 = Number(document.querySelector('#add2').value);

   document.querySelector("#sum").value = add(number1, number2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

function subtract (number1, number2)
{
    return number1 - number2;
};

function subNumbers()
{
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(number1, number2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subNumbers);


/* Arrow Function - Multiply Numbers */

multiply = (number1, number2) => number1 * number2;

mutiplyNumbers = () => {
    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(number1, number2);
}

document.querySelector('#multiplyNumbers').addEventListener("click", mutiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1, number2)
{
    return number1 / number2;
};

divideNumbers = () =>
{
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(number1, number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function gettotal(){
    let subtotal = document.querySelector('#subtotal').value;
    let checkbox = document.getElementById('member');
    if (checkbox.checked)
    {
        document.getElementById('total').innerText = `$ ${parseFloat(subtotal - (subtotal * 0.2)).toFixed(2)}`;
        
    }
    
    else
    {
        document.getElementById('total').innerText = parseFloat(subtotal).toFixed(2);
    }

    
}

document.querySelector('#getTotal').addEventListener('click', gettotal);




/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let arraySource = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerText = arraySource;


/* Output Odds Only Array */

const oddNumbers = arraySource.filter((num) => num % 2 === 1);
document.getElementById('odds').innerText = oddNumbers;

/* Output Evens Only Array */

const evenNumbers = arraySource.filter((num) => num % 2 ===0);
document.getElementById('evens').innerText = evenNumbers;

/* Output Sum of Org. Array */

const arraySum = arraySource.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerText = arraySum;

/* Output Multiplied by 2 Array */

const arrayByTwo = arraySource.map((num) => num *2);
document.getElementById('multiplied').innerText = arrayByTwo;

/* Output Sum of Multiplied by 2 Array */

const arraySumByTwo = arrayByTwo.reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerText = arraySumByTwo;
