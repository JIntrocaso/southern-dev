// Get the modal
let modal = document.getElementsByClassName('myModal');

// Get the button that opens the modal
let modalTrigger = document.getElementsByClassName("modalTrigger");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
modalTrigger.onclick = function() {
  modal.style.display = "block";
}

// modalTrigger.addEventListener("click", ()=>{
//     modal.style.display = "block";
// })

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
