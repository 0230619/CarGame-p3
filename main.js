// Variable
let car = {
    make: 'Mustang',
    model: 'Ford',
    color: 'Blue',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },
   
    driveAroundUSA(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 6000;
        alert(`New Mileage: ${this.mileage}`);
        alert(`Car needs a tuneup!`);
        this.isWorking = false;
    },

    getTuneUp(){
        alert(`Car is fixed and ready to go!`);
        this.isWorking = true;
    },

    honk(){
        alert(`Honk! Honk!`);
    }
}


// FUNCTIONS
// Logs all of our car's current stats to the console
const rewriteStats = () => {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Color: ${car.color}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`Is Working: ${car.isWorking}`);
    console.log(`-------------------------------`);
}


// MAIN PROCESS
/* Capture keyboard input. Depending on the letter pressed it
 will "call" (execute) different function. */
document.onkeyup = (event) => {

    //Captures the key press, converts it to lowercase, and save it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();
    if(letter === `h`){
        car.honk();
        rewriteStats();
    }

    if(letter === 'd'){
        car.driveToWork();
        rewriteStats();
    }

    if(letter === 'r'){
        car.driveAroundUSA();
        rewriteStats();
    }

    if(letter === 't'){
        car.getTuneUp();
        rewriteStats();
    }
}