const TypeWriter = function(txtElement, words, wait = 3000, stop){
        this.txtElement = txtElement;
        // array of data-words
        this.words = words // words data attribute or Array

        // prototyped: data-words [array]
        this.txt = "";
        this.wordIndex = 0;
        // 1 variable , 2. radix : base 
        this.wait = parseInt(wait, 10);
        this.type()
        this.isDeleting = false;
        this.stop = this.txtElement.innerHTML = "";

}

// type method 
TypeWriter.prototype.type = function(){

    // testing purposes to see what our constructor is calling 

    
    // READ:
    // Array: current index of data-word word 
    const current = this.wordIndex % this.words.length;
    

    // get full text of current data-word 
    // array of words gets defined here from data-word attribute
    const fullTxt = this.words[current];

    console.log("text in array:",fullTxt);

    // EVAL:
    // check if animation is deleting 
    if(this.isDeleting){
        
        // Q at what point is this occur , breakpoint? 

        // this.text is the index of our array - data-words
        // this.txt is referenced in our constructor
        this.txt = fullTxt.substring(0, this.txt.length + -1)
    }else{
        // ARRAY: data-words add character
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    
    // PRINT: Insert Txt into element 
    this.txtElement.innerHTML = `<span class="txtonly">${this.txt}</span>`;

    // test type speed against initial type speed

    console.log("function running");

    // LOOP
    let typeSpeed = 300;
    if(this.isDeleting){

        // DELETION SPEED
        typeSpeed / 3;
    }

    //  if word in first index is complete
    if(!this.isDeleting && this.txt === fullTxt){
        // 
        typeSpeed = this.wait;
        console.log(typeSpeed);
        console.log(this.fullTxt)
        // HERE IS WHERE DELETING ANIMATION STARTS, control flow change
        // now deletion is set to true, text deletion begins
        this.isDeleting = true;

        // HERE IS WHERE DELETING ANIMATION STARTS, control flow change
        // if = when the text is full 
    }else if(this.isDeleting && this.txt === ""){
                // set delete back to false
            this.isDeleting = false;
            console.log("DEBUG",this.wordIndex);
            this.wordIndex++

            typeSpeed = 150;
            console.log("DEB",this.wordIndex);
    } 
    if(this.wordIndex > 3){
        
        this.txt = '';
        
        
        // this.isDeleting = true;
        this.isDeleting = false;

        // THIS RETURN STATEMENT IS KEY. STOPS FUNCTION
        return this.txtElement.innerHTML = "The Awesome"
    
    }



   let stop = ""
   
    // calls type()
    // es6 1line setTimeout function 
    // Adding type deletion speed to our call here
 
    setTimeout(() => this.type(), typeSpeed)
    // setInterval(() => this.txtElement = restoreHt, 1000);
    // this.stop()
}
// init on dom load , equiv:doc.ready 

document.addEventListener("DOMContentLoaded", init);

// initialize app w/ one function and constructor app 
// Q: QA:  THIS is what i was looking for, this particular routine below is important
function init(){
    const txtElement = document.querySelector(".txt-typog");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
   

    new TypeWriter(txtElement, words, wait);
}

// ES6 class 

// class TypeWriter{
//     constructor(txtElement, words, wait){
//         this.txtElement = txtElement;
//         this.words = words; 
//         this.txt = '';
//         this.wordIndex = 0;
//         this.wait = parseInt(wait, 10);
//         this.type()
//         this.isDeleting = false;
//     }
// }