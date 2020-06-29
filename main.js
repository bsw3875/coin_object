let coin = {
    state: 0,
    flip: function () {
        var d = Math.random();
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
            image.scr = "images/heads.jpg"

        } else if (this.state === 1) {
            image.scr = "images/tails.jpg"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
}



function display20Flips() {
    let display20Flips = document.getElementsById('flips');

    for (let i = 0; i < display20Flips.length; i++) {
        // to open all photos in new tabs:
        // window.open(allImages[i].src, '_blank');
        display20Flips[i] = 'flip_image';
    }











    // for loop 20 times
    //coin.flip()
    //use coin.toString() to show something on html
    // let i;  
    // for (i = 0; i < 20; i++) {
    //result = 20
    //let coin = 20;
    //coin.flip = 20
    //coin.toString()
    //document.createElement();

    //let i = document.createElement("flips");                                              
    //document.getElementById("coin").appendChild();    


    //console.log(i);

    //return true
}




function display20Images() {

    let display20Images = document.getElementsById('img');

    for (let i = 0; i < display20Images.length; i++) {
        // to open all photos in new tabs:
        // window.open(allImages[i].src, '_blank');
        display20Images[i] = 'coin-image';
    }








    // for loop 20 times
    //coin.flip()
    //use coin.toString() to show something on html
    // for (i = 0; i < 20; i++)
    //result = 20
    // coin.toString() ="heads"|"tails"
    //document.getElementById().innerHTML = "images"
    //let i= document.createElement("images");                                               
    //document.getElementById("coin").appendChild(); 
    // console.log()
    // return true
}



//}


