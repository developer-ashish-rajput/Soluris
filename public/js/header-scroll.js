
document.addEventListener("DOMContentLoaded", function(){
  console.log("Content loaded");
 setTimeout(() => {
   let heaedr =  document.querySelector('body')

  // Add an event listener for the 'scroll' event
heaedr.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  console.log("Current scroll position:", scrollPosition);
});


  console.log( heaedr);
 heaedr.addEventListener('scroll', function() {
  //console.log(window.scrollY);
  if (window.scrollY ===0) {
   // console.log("scrolled 50px");
    document.getElementById('navbar_top').classList.add('fixed-top');
    // add padding top to show content behind navbar
   let navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  } else {
    document.getElementById('navbar_top').classList.remove('fixed-top');
     // remove padding top from body
    document.body.style.paddingTop = '0';
  } 
});
 }, 2000);

}); 


