//Get modal element
var modal= document.getElementById('simpleModal');
//Get open modal button
var modalBtn= document.getElementById('modalBtn');
//Get close button
var closeBtn= document.getElementsByClassName('closeBtn')[0];

//List for open click
modalBtn.addEventListener('click', openModal);
//List for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', outsideClick);

//function to open modal
function openModal(){
   //console.log (123) //You can console.log it to check if the function works by looking in the console.
    modal.style.display= "block";
}
//function to close modal
function closeModal(){
         modal.style.display= "none";
 }

 //function to close modal if outside click
function outsideClick(e){
    if (e.target == modal){
    modal.style.display= "none";
}
}