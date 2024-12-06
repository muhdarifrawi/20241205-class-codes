let randomArr = [2,4,6,8];

console.log(randomArr);
console.log(randomArr[2]);

let x = 4;

if (x == 4){
    let y = 7;
    
    console.log(y);
    console.log(x);
}

function exampleFn(){
    console.log("example function");
    return 4;
}

exampleFn();

function showNumber(number){
    console.log("The number is", number);
}

showNumber(4);

function multi(number){
    let ans = 2 * number
    console.log(x);
    return ans;
}

multi(3);

function twoParams(x, y){
    return x + y;
}

let answer = twoParams(3,2);
console.log(answer);

function multiplyTwoParams(x,y){
    let z = x * y
    return z;
}

multiplyTwoParams(2,3);

function calcDistance(speed, time){
    let distance = speed * time;
    return distance;
}

calcDistance(10,10);

function rectParameter(breadth, length){
    let parameter = 2*(breadth + length);
    return parameter;
}
rectParameter(20,30);

function userLocation(country="singapore"){
    console.log(country);
}

userLocation("malaysia");

function foobar(x){
    return x;
}

let a = 3;
foobar(a);
console.log(a);
