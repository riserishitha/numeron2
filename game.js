// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let score = 0;
let time = document.getElementById("timer")
let ClearReferedtime = undefined;

let num1random = Math.floor(Math.random()*100)
let num2random = Math.floor(Math.random()*100)
let num3random = undefined;
// Iteration 3: Creating variables required to make the game functional
let plusbt = document.getElementById("plus")
let minusbt = document.getElementById("minus")
let mulbt = document.getElementById("mul")
let divbt = document.getElementById("divide")
let modulusbt = document.getElementById("modulus")
let Operators;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3 = document.getElementById("number3")
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    Operators = Math.floor(Math.random()*5)
     num1random = Math.floor(Math.random()*100)
     num2random = Math.floor(Math.random()*100)
    if (num1random<num2random){
        let tempvariable = num1random
        num1random = num2random
        num2random = tempvariable
    }
    if (num1random==0 ||num2random==0){
        randomise();
    }
    if (Operators == 5){
        num3random = num1random +num2random
        console.log("add", num3random)
    }else if (Operators==4){
        num3random = num1random - num2random
        console.log("sub",num3random)
    }else if (Operators ==3 ){
        num3random = num1random*num2random
        console.log("mul",num3random)
    }else if (Operators==2){
        num3random = Math.floor(num1random/num2random);
        console.log("div",num3random)
    }else if (Operators==1){
        num3random = num1random%num2random;
        console.log("modulus",num3random)
    }else {
        randomise()
        console.log("recurrsion")
    }
    num1.innerText = num1random
    num2.innerText = num2random
    num3.innerText = num3random
}
// Iteration 6: Making the Operators (button) functional
randomise()
// Iteration 7: Making Timer functional
function Timer (){
    let starttime = 20;
time.innerText = starttime;
ClearReferedtime =  setInterval (function(){
    starttime = starttime-1
    time.innerText=starttime;
    if (starttime==0){
        localStorage.setIte("score",score)
        window.location.href= "./gameover.html"
    }
    }, 1000);
}
Timer();
plusbt.addEventListener('click', function () {
  if (num1random + num2random == num3random) {
    score = score + 1;
    clearInterval(ClearReferedtime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
  }
});
minusbt.addEventListener('click', function () {
  if (num1random - num2random == num3random) {
    score = score + 1;
    clearInterval(ClearReferedtime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Game OVer', score);
  }
});
mulbt.addEventListener('click', function () {
  if (num1random * num2random == num3random) {
    score = score + 1;
    clearInterval(ClearReferedtime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Game OVer', score);
  }
});

divbt.addEventListener('click', function () {
  if (Math.floor(num1random / num2random) == num3random) {
    score = score + 1;
    clearInterval(ClearReferedtime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Game OVer', score);
  }
});
modulusbt.addEventListener('click', function () {
  if (num1random % num2random == num3random) {
    score = score + 1;
    clearInterval(ClearReferedtime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Game OVer', score);
  }
});
