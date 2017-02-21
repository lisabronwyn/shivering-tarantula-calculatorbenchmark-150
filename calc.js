need to define vars for display storedNum operation queuedOperation and perform equations for various buttons onlick after onload

calculations, display stored numbers, clear all

displayNum = "";
storedNum = "";
operation = 0;
queuedOperation = 0;
calculationFinished = false;

window.onload = function(calculate) {
    var numbers = document.querySelectorAll(".item");
    console.log('numbers', numbers)
    console.log('numbers now: ', numbers[0].innerText)
    for(var i= 0; i < numbers.length; i++); {
    numbers[i].addEventListener("click", function() {
        return this.innerText;


    })
  }
