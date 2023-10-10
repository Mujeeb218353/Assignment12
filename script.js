function showTime(){
    let date = new Date();
    document.getElementById('time').innerHTML = ''+date;
    setInterval(showTime,1000);
}
function greet(){
    let firstName = document.getElementById('fn').value;
    let lastName = document.getElementById('ln').value;
    document.getElementById('greet').innerHTML = 'Hello, '+firstName+' '+lastName;
}
function sum(){
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    document.getElementById('add').innerHTML = 'Sum:'+(num1+num2);
}
function cal(){
    let num1 = +document.getElementById('number1').value;
    let num2 = +document.getElementById('number2').value;
    let operator = document.getElementById('operator').value;
    document.getElementById('result').innerHTML = 'Result:'+calculator(num1, num2, operator);
}
function calculator(num1, num2, operator){
    switch(operator){
        case '+':
            return (num1+num2);
        case '-':
            return (num1-num2);
        case '*':
            return (num1*num2);
        case '/':
            return (num1/num2);
        case '%':
            return (num1%num2);
        default :
            return 'Please Use Operator...';
    }
}
function sq(){
    let num = document.getElementById('num').value;
    square(num);
}
function square(num){
    return document.getElementById('square').innerHTML = 'Square:'+num*num;
}
function fac(){
    let num = document.getElementById('fac').value;
    for(let i=num-1; i>0; i--){
        num *= i;
    }
    document.getElementById('factorial').innerHTML = 'Factorial:'+num;
}
function printNum(){
    let s = document.getElementById('sNum').value;
    let l = document.getElementById('lNum').value;
    for(let i = s; i <= l; i++){
        let element = document.createElement('p');
        element.innerHTML = ''+i;
        document.getElementById('printNumber').appendChild(element);
    }
}
function hypotenuse(){
    document.getElementById('printHyp').innerHTML =
        'Hypotenuse:'+(Math.hypot(+document.getElementById('base').value,+document.getElementById('perp').value)).toFixed(2);
}
function area(){
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value
    document.getElementById('printArea').innerHTML = 'Area of Rectangle:'+length*width;
}
function palindrome(){
    let palindrome = document.getElementById('palindromeOrNot').value;
    let arr = palindrome.split('');
    let revArr = arr.reverse();
    if(palindrome.toLowerCase() === revArr.join('').toLowerCase()){
        document.getElementById('palindromeString').innerHTML = palindrome + ' is a palindrome';
    }else {
        document.getElementById('palindromeString').innerHTML = palindrome + ' is not a palindrome';
    }
}
function localCase(){
    let str = document.getElementById('upper').value;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str2 = arr.join(' ');
    document.getElementById('localCase').innerHTML = 'String:'+str2;
}

const longStrInputButton = document.getElementById('longStrButton');
longStrInputButton.addEventListener('click', () => {
    let longString = document.getElementById('str').value;
    document.getElementById('longStr').innerHTML = 'Long Word:'+longStr(longString);
});
function longStr(longString){
    let arr = longString.split(' ');
    let longStr = '';
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > longStr.length){
            longStr = arr[i];
        }
    }
    return longStr;
}
const countButton = document.getElementById('countButton');
countButton.addEventListener('click', countOccurrences);
function countOccurrences() {
    const inputString = (document.getElementById('inputString').value).toLowerCase();
    const letter = (document.getElementById('letter').value).toLowerCase();
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === letter) {
            count++;
        }
    }
    document.getElementById('count').innerHTML = 'The letter `'+letter+'` appears '+count+' times in the string.';
}
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', handleCalculateClick);
function calcCircumference(radius) {
    return 2 * Math.PI * radius;
}
function calcArea(radius) {
    return  Math.PI * Math.pow(radius, 2);
}
function handleCalculateClick() {
    const radius = parseFloat(document.getElementById('radius').value);
    document.getElementById('circumferenceResult').innerHTML = 'The circumference is '+calcCircumference(radius).toFixed(2);
    document.getElementById('areaResult').innerHTML = 'The area is '+calcArea(radius).toFixed(2);
}