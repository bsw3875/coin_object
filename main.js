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
    let n = Number
    let heads = 0, tails = 0;
    for (let index = 0; index < n; index++) {


        if (Math.random() < 20) {
            heads++;
        } else {
            tails++;
        }



        //citation: bmr549/coinflip.js on github.com


        //Write a function called display20Images, again using a loop to flip the
        // coin 20 times…but this time instead of displaying the result as a string,
        // display the result of each flip as an HTML IMG element on the page 
        //(make use of your toHTML() method).



        function display20Images() {

            let result = document.getElementById("pic");
            let displayImages = Math.floor(Math.random() * 20);
            console.log(x);
            if (displayImages = 20) {
                document.getElementById("Coin").innerHTML = "Heads"

                result.innerHTML = "<img src=\"images/heads.jpg\" />";
            }
            else {
                document.getElementById("Coin").innerHTML = "Tails";
                result.innerHTML = "<img src=\"images/tails.jpg\" />";
            }
        }

        //citation:https://stackoverflow.com/



    };

}




