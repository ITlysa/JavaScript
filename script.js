// Get numbers from button
var getNumber = (num) => {
    let getValue = document.getElementById("output-value");
    switch (num) {
        case 0:
            getValue.innerHTML += '0';
            break;
        case 1:
            getValue.innerHTML += '1';
            break;
        case 2:
            getValue.innerHTML += '2';
            break;
        case 3:
            getValue.innerHTML += '3';
            break;
        case 4:
            getValue.innerHTML += '4';
            break;
        case 5:
            getValue.innerHTML += '5';
            break;
        case 6:
            getValue.innerHTML += '6';
            break;
        case 7:
            getValue.innerHTML += '7';
            break;
        case 8:
            getValue.innerHTML += '8';
            break;
        case 9:
            getValue.innerHTML += '9';
            break;
    }
}
//clear the numbers
var clean = () => {
    document.getElementById("output-value").innerHTML = "";
}
// backspace 
var backspace = () => {
    var back = document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = back.substring(0, back.length - 1);

}
// get operator from button
var getOperator = (operators) => {
    let getValue = document.getElementById("output-value");
    switch (operators) {
        case '/':
            getValue.innerHTML += '/';
            break;
        case '+':
            getValue.innerHTML += '+';
            break;
        case '-':
            getValue.innerHTML += '-';
            break;
        case '*':
            getValue.innerHTML += '*';
            break;
        case '%':
            getValue.innerHTML += '%';
            break;
    }
}
//calculate to display value
var equal = () => {
    let equal = document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = eval(equal);
    document.getElementById("history-value").innerHTML = eval(equal) + "=";
}
//microphone
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}
var microphone = document.getElementById('microphone');
microphone.onclick = function () {
    microphone.classList.add("record");
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    operations = {
        "plus": "+",
        "minus": "-",
        "multiply": "*",
        "multiplied": "*",
        "divide": "/",
        "divided": "/",
        "reminder": "%"
    }
    recognition.onresult = function (event) {
        var input = event.results[0][0].transcript;
        for (property in operations) {
            input = input.replace(property, operations[property]);
        }
        document.getElementById("output-value").innerText = input;
        setTimeout(function () {
            evaluate(input);
        }, 1000);
        microphone.classList.remove("record");
    }
}
// display value by microphone
function evaluate(input) {
    try {
        var result = eval(input);
        document.getElementById("output-value").innerText = result;
        document.getElementById("history-value").innerText = "="+ result;
    }
    catch (e) {
        document.getElementById("output-value").innerText = "";
    }
}





