
const main = () => {
    const billBoard = document.getElementById("billboard");
    const lauchingRamp = document.getElementById("lauching-ramp");
    const firingButton = document.getElementById("firing-button");
    const cancelButton = document.getElementById("cancel-button");
    const rocket = document.getElementById("rocket");
    const billBoardSpan = document.querySelector("#billboard span");
    const tookOff = document.querySelector("#rocket.tookOff");

    let seconde = 11;

    const addZero = (value) => {
        if (value < 10) {
            value = "0" + value;
        }
        return value;
    }

    let timeoutId;

    let startChrono = () => {
        rocket.src="images/rocket2.gif";
        seconde--;
        billBoardSpan.innerHTML = `${addZero(seconde)}`;
        firingButton.classList.add("disabled");
        cancelButton.classList.remove("disabled");

        timeoutId = window.setTimeout(startChrono, 1000);

        if (billBoardSpan.innerHTML === "00") {
            window.clearTimeout(timeoutId);
            rocket.src = "images/rocket3.gif";
            rocket.classList.add("tookOff");
            
        }
    }

    
    firingButton.addEventListener("click", startChrono) 

    cancelButton.classList.add("disabled");

     let reset = () => {
        window.clearTimeout(timeoutId);
        cancelButton.classList.add("disabled");
        firingButton.classList.remove("disabled");
        seconde = 10;
        billBoardSpan.innerHTML = `${addZero(seconde)}`;
        console.log('test')
        }


    cancelButton.addEventListener("click", reset);


    

}

window.addEventListener("load", main)