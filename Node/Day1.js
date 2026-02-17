function calculate(a, b, callback){   
    let sum = a + b;
    callback(sum);
}

function showResult(result){
    console.log("Addition is", result);
}

calculate(15, 10, showResult);


function greet(name, callback) {
    console.log("Hello" + name);
    callback();
}

function sayBye(){
    console.log("Goodbye brother..!");
}

greet("Mayur", sayBye)

function showMessage(callback){
    console.log("Message is ready");
    callback();
}

function readMessage(){
    console.log("Reading Message");
}

showMessage(readMessage);

