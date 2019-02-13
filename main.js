// Variable
let car = {
    make: 'Mustang',
    model: 'Ford',
    color: 'Blue',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 8;
        alert(`New Mileage: ${this.mileage}`);
    },
}


// Functions

/* Capture keyboard input. Depending on the letter pressed it
 will "call" (execute) different function. */
document.onkeyup = (event) => {

    //Captures the key press, converts it to lowercase, and save it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if(letter === 'd'){
        car.driveToWork();
        rewriteStats();
    }
}