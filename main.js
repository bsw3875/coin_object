let coin = {
    state: 0,
    flip: function () {
        let d = Math.random();
        if (d < 0.5) {
            this.state = 0

        } else {
            this.state = 1
        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        if (this.state === 0) {
            return "heads"
        } else if (this.state === 1) {
            return "tails"
        }


        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = "images/heads.jpg"

        } else if (this.state === 1) {
            image.src = "images/tails.jpg"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
}

//Write a function called display20Flips that uses a loop to flip the coin 
// times. Each time the coin flips, display the result of each flip as a 
//string on the page (make use of your toString() method)



function display20Flips() {

    for (let index = 20; index < document.createElement; index++) {
        flips[index] = flip-image;
    }
}




//Write a function called display20Images, again using a loop to flip the
// coin 20 times…but this time instead of displaying the result as a string,
// display the result of each flip as an HTML IMG element on the page 
//(make use of your toHTML() method).



function display20Images() {

    let images = document.createElement('img');

    for (let index = 20; index < images.length; index++) {
        images[index] = coin-image;
    }

}


//}



