/* Drum Kit (index.js) */

var numberOfButtons = document.querySelectorAll(".drum").length; // number of buttons that have ".drum" class

// I add event listener to 7 buttons that have ".drum" class
for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", myClickFunc);

} // end-for

// I add event listener to "document"!
document.addEventListener("keypress", myPressFunc);


// Creating the function
function myClickFunc() {

    // this: EvenListener' ı tetikleyen butonun kimliğidir!
    // console.log(this); 

    var sound;

    if (this.textContent === "w") {
        sound = new Audio("./sounds/tom-1.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClick(this.textContent);
    }
    else if (this.textContent === "a") {
        sound = new Audio("./sounds/tom-2.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClick(this.textContent);
    }
    else if (this.textContent === "s") {
        sound = new Audio("./sounds/tom-3.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClick(this.textContent);
    }
    else if (this.textContent === "d") {
        sound = new Audio("./sounds/tom-4.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClick(this.textContent);
    }
    else if (this.textContent === "j") {
        sound = new Audio("./sounds/snare.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClick(this.textContent);
    }
    else if (this.textContent === "k") {
        sound = new Audio("./sounds/crash.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClick(this.textContent);
    }
    else if (this.textContent === "l") {
        sound = new Audio("./sounds/kick-bass.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClick(this.textContent);
    }
} // end-myClickFunc


// Creating the function
function myPressFunc(event) {

    const pressedKey = event.key; // key pressed on keyboard

    // console.log(pressedKey);

    var sound;

    if (pressedKey === "w" || pressedKey === "W") {
        sound = new Audio("./sounds/tom-1.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClickForPress(pressedKey);
    }
    else if (pressedKey === "a" || pressedKey === "A") {
        sound = new Audio("./sounds/tom-2.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClickForPress(pressedKey);
    }
    else if (pressedKey === "s" || pressedKey === "S") {
        sound = new Audio("./sounds/tom-3.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClickForPress(pressedKey);
    }
    else if (pressedKey === "d" || pressedKey === "D") {
        sound = new Audio("./sounds/tom-4.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClickForPress(pressedKey);
    }
    else if (pressedKey === "j" || pressedKey === "J") {
        sound = new Audio("./sounds/snare.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClickForPress(pressedKey);
    }
    else if (pressedKey === "k" || pressedKey === "K") {
        sound = new Audio("./sounds/crash.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClickForPress(pressedKey);
    }
    else if (pressedKey === "l" || pressedKey === "L") {
        sound = new Audio("./sounds/kick-bass.mp3"); // Creating a new object
        sound.play();

        // Calling the function for animation
        myAnimationFuncForClickForPress(pressedKey);
    }

} // end-myPressFunc


// // Second way: Writing the myPress function anonymously!

// document.addEventListener("keypress", (event) => {
//     // body of the myPressFunc function
// });


// Third way: Writing the myPress function anonymously!

// document.addEventListener("keypress", function(event) {
//     // body of the myPressFunc function
// });


// Creating the function
function myAnimationFuncForClick(textContentOfButton) {
    document.querySelector("." + textContentOfButton).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + textContentOfButton).classList.remove("pressed");
    }, 100);
}


// Creating the function
function myAnimationFuncForClickForPress(keyValue) {
    document.querySelector("." + keyValue).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + keyValue).classList.remove("pressed");
    }, 100);
}