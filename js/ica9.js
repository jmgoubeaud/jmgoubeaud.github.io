// console.log("Hello, World!");
let btn = document.querySelector("#button");
// console.log(btn);

function changeBtn() {
    // console.log("This worked!");
    // btn.textContent = "TEST";
    btn.style.backgroundColor = "darkmagenta";
    btn.style.border = "5px solid magenta"
    btn.style.color = "white"
}

btn.addEventListener('click', changeBtn);

let n = document.querySelector("#new");

function changeN() {
    n.style.backgroundColor = "lightcoral";
    n.style.border = "10px solid lightpink";
    n.style.color = "blue";
}

n.addEventListener('click', changeN);

function checkGuess() {
    // alert(userGuess.value);

    let value = userGuess.value * 2;
    alert(value);
}

let guessBtn = document.querySelector(".guessSubmit");
let userGuess = document.querySelector(".guessField");
guessBtn.addEventListener('click', checkGuess);