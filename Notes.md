# Day 10

## Object
- Objects in js are key value pair. 
- Har ek cheej jo curly braces m ho vo object hota h
- ek cheej ke liye object banta h multiple cheejo ke liye array banta h
```Javascript
var obj = {
    name:"deepak",
    chacha: function (){

    }
}

obj.name="Deepak Singh";
Object.freeze(obj);// cannot change anything

delete obj.age; // to delete the key with value

```

**Properties and Method**

- Key in obejcts are known as properties but but but as you can see in the above example chacha is a method.

- **Koi bhi function object ke andar khelata h method**

# Day 11
## Hoisting
Hoisting ka matlab hota h ki aapke banaye hue sabhi declarations (variables or functions) ko top of the code move kar deta hai, jiske wajah se unke declaration se phale aap unhe use kar pate h.

**Hosting and hoisting**
- Hosting internet par website ko live karna.
- Hoisiting uppar likha toh hai.

## Call stack
Call stack in js is more like whenever you run a function js makes an entry of what is running and the moment it finishes running, js removes it from the entries of running functions, that entry list or entry book is called call stack.

## Heap Memory 
Jitne bhi functions call hote h unhe chalate waqt jitne bhi data vo produce karte h vo heap memory m store hota h.

This concepts come during runtime. It stores the values of variables during execution of code.

# Day12
## Execution Context
It is the environment present to a function, in which it's code will run, this environment contains, it's own this keywords value and it contain's, its own data, scope & also the funstions built inside the function which is getting called. 

When we create any function it creates its own execution context which contains the variables, functions, methods, this, .... available to functions.

## Lexical Environment 
Lexical environment is a container that holds, variable and functions and determine the accessiblity and lifespan of the code.

It is created when we create any function. It can access the global and local varialbles. 

iske pass identifiers-variables ki informaation bhi hoti h, which means it contains the mapping what a function can access the and outer scope variables and functions and inner scope variables and functions

# Day13

## sync and async
sync ka code laaine by laaine chalega, jabki async ka code ek saath shuru hota h side stack mai lekin chalta us order mai h jiska answer phele aa jaaye.

**There are two stacks side stack and main stack, main stack contains sync code and side stack contains async code**

## Event loop
yhi loop check karta h ki main stack khali hua yaa nhi taaki side stack ke functions ko main stack mai le jaa kar execute kiya jaa sake

## HOFS

higher order fnc vo fnc hoote h jo argument m function lete h ya fir function return karte h 
ex- map, foreach, filter....

# Day14

## Clousers
A function returning another function and using variables from parent function.
```Javascript
function abcd(){
    var a =12;
    return function(){
        a++;
        console.log(a);
    }
}

var ans = abcd();
ans();
```

## IIFE (Immediatley invoked function expression)

It is used to create private variable.

```Javascript
var ans = (function(){
    var a = 12;
    // Hum ye variable iife ke bhar access nhi kar sakte
    return {
        getter:function(){
            console.log(a);
        },
        setter:function(newVal){
            a = newVal;
        }
    }
})();
```

# Day15

## this call apply bind
Ye ek tarika h function ko call karte waqt uske andar this ki value change karne ka, aap fnc ke andar this ki value koi bhi man chaha object bana sakte ho.   

this values in following
```Javascript
// Global - window
console.log(this);

// function - window
function abcd() {
    console.log(this);
};
abcd();

// method - object
var obj = {
    sayHello: function(){
        console.log(this);
    }
}
obj.sayHello();


// es5 fnc in method - window

// In this we are lossing the value of this from object to window so we create es6 fnc
var obj2 = {
    sayHello:function(){
        function abcd2(){
            console.log(this);
        }
        abcd2();
    }
}

obj2.sayHello()

// es6 fnc inside method - object
var obj3 = {
    say:function(){
        var abcd3 = ()=>{
            console.log(this);
        }
        abcd3();
    }
}

obj3.say();

// eventListner (special case) - the element on which the eventlistener is placed 

var h1 = document.querySelector('h1')

h1.addEventListener('click', function () {
    console.log(this);
})

**Way to change the value of this**
var obj = {name:"Deepak"}
function abcd(a, b, c, d){
    concole.log(this, a, b, c, d)
}

abcd.call(obj, 1, 2, 3, 4);

// apply use hota h 2 parameters lene ke liye
abcd.apply(obj, [1,2,3,4])

// bind function ko bind kar deta h obj ke saaath aur usko return kar deta h 
var bindedfnc = abcd.bind(obj, 1, 2, 3, 4)
```

# Day16

**node** - node js chrome ke V8 engine par based h iske uppar ek layer hoti h jo koi js ki hoti h which is our code basically is puri cheej ko hi hum node js khete h. 

Node js hume ek server bana kar deta h

**npm** - aisi ek jagah hai jha the packages are stored not only for node js but for different languages. Earlier its full form was node package manger but as of now it is not only for node so it has different full form "naan paneer and makhni", "nahi pata mujhe",....  

**import/export**

# Day17

## Packages 
Packages already made code hota h jiske use se koi feature ban sakta h agar us package ko use kare humare app mai.

**Install packages**
npm install < package_name > or npm i < package_name >

**Use**
require 

```Javascript
var oneLinerJoke = require('one-liner-joke');
var getJoke = oneLinerJoke.getRandomJoke();
console.log(getJoke.body);
```
### writeFile
```js
const fs = require('node:fs')
fs.writeFile('abcd.txt', 'hellooo kaise ho mere bhai', function(err){
    if(err){console.log(err);}
    else{
        console.log('file ban gai');
    }
})

```

# Day18
## File System 
### fs.readFile
```js
var fs = require('node:fs')
fs.readFile('abcd.txt', 'utf-8', function(err,data){
    if(err) console.log(err);
    else{
        console.log(data);
    }
})
```

### fs.appendFile

```js
var fs = require('node:fs')
fs.appendFile('abcd.txt', ' hellloo mai hu cahat fateh ali khan', function(err){
    if(err) console.log(err);
    else{
        console.log('appended');
    }
})
```

### fs.unlink

```js
var fs = require('node:fs')
fs.unlink('abcd.txt', function(err){
    if(err) console.log(err);
    else console.log("deleted");
})
```

### fs.readdir

```js
var fs = require('fs');
fs.readdir('Notes', function(err,data){
    if(err) console.log();
    else console.log(data)
})

```
 
# Day19  


