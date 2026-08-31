
let box1 = document.querySelector("#q1")
let box2 = document.querySelector("#q2")
let box3 = document.querySelector("#q3")
let box4 = document.querySelector("#q4")
let box5 = document.querySelector("#q5")
let box6 = document.querySelector("#q6")
let box7 = document.querySelector("#q7")

let pGuy = document.createElement("p")

pGuy.innerHTML = `To convert binary to decimal:<br>

1. Start from the right and assign place values: 1, 2, 4, 8, 16, 32, etc.<br>
2. Multiply each binary digit (0 or 1) by its place value.<br>
3. Add all the results together.<br>
4. The total is the decimal number.<br>

For example: 1011 = 8 + 0 + 2 + 1 = 11.`


let helpButton = document.createElement("button");
helpButton.textContent = "Help";

document.body.appendChild(helpButton);

helpButton.addEventListener("click", () => {
    document.body.appendChild(pGuy);
});

box1.addEventListener("change", () => {
    if (box1.value == "1") {
        alert("Correct");
    }
    else {
        alert("Incorrect. The correct answer is 1");
    }
});

box2.addEventListener("change", () => {
    if (box2.value == "9") {
        alert("Correct");
    }
    else {
        alert("Incorrect. The correct answer is 9");
    }
});

box3.addEventListener("change", () => {
    if (box3.value == "15") {
        alert("Correct");
    }
    else {
        alert("Incorrect. The correct answer is 15");
    }
});

box4.addEventListener("change", () => {
    if (box4.value == "8") {
        alert("Correct");
    }
    else {
        alert("Incorrect. The correct answer is 8");
    }
});

box6.addEventListener("change", () => {
    if (box6.value == "192") {
        alert("Correct");
    }
    else {
        alert("Incorrect. The correct answer is 192");
    }
});

box7.addEventListener("change", () => {
    if (box7.value == "97") {
        alert("Correct");
    }
    else {
        alert("Incorrect. The correct answer is 97");
    }
});
