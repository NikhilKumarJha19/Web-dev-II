// trim method used for removing whitespace from both ends of a string
// split method used for splitting a string into an array of substrings based on a specified separator
let sentence = " I am a coma seperated sentence";
console.length(sentence.length)
let words = sentence.split("a")
console.log(words); // ["I", "am", "a", "coma", "seperated", "sentence"

let words2 = sentence.split("am");
console.log(words2); // [" I ", " m","coma","" sep","r","ted sentence"]

// find out the occurance of "r"in the given text 
let str=" tu meri mai tera mai tera tu meri";
console.log(split("r").length -1); 


// regular fuction
function demo(){
    let a =10;
    console.log(a)
}
demo()

function sample(){
}
sample()

callback function : We can pass a function as an argument to another function. The function passed as an argument is called a callback function.

// callback=demo()
fuction sample (callback){
    console.log("sample")
    callback()
}
function demo(){
    console.log("demo")
}
sample(demo)

// Arrow function

function demo3(){
    return "demo3";
}
console.log(demo3())

const demo2 = () =>console.log("demo2");
console.log(demo2())

// Fisr class function
// 1. We can treat a avriable as a function
// 2. We can pass a function as an argument inside another function
// 3. we can return a function from another function

function test(){
    return function test2(){
        console.log("test2");
        return function test3(){
            console.log("test3");
        }
    }
}
// test()()()
let value = test()
let value2 = value()
value2()

// Higher order function

// Map, filter and reduce


setTimeout(()=>{

},1000)

7. self invoking function(IIFE) : to obtain data privacy and to call a function immediately after the function scope.

function classtest(){
    console.log("classtest")
}
let a=10;
function midterm(){
    classtest();
}
Midterm()


let test5 = (function(){
    return"sample5";
})()
console.log(test5)

(function(){
let test5
})()


