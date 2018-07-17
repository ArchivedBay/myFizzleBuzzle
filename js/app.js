fizzBuzz = () => {
    let numArray = [ [], [], [], [] ]; // FB, F, B, r
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numArray[0].push(i); //FB
        } else if (i % 3 === 0) {
            numArray[1].push(i); //F
        } else if (i % 5 === 0) {
            numArray[2].push(i); //B
        } else {
            numArray[3].push(i); //r
        }
    }

    for (let i = 0; i < numArray.length; i++) {           //for each array
        let fragment = document.createDocumentFragment(); //for memory and performance reasons, append to a fragment first.
        let loc = document.getElementById(`${i}`);        //grab the correct location on the DOM

        for (let j = 0; j < numArray[i].length; j++) {    //for each number in the current array
            let li = document.createElement('li');        //make an li
            li.textContent = numArray[i][j];              //set the textContent equal to that number
            fragment.appendChild(li);                     //append the li to the fragment
        }
        loc.appendChild(fragment);                        //finally, append the fragment to the DOM.
    }
    
}

fizzBuzz(); //Run our program c:
