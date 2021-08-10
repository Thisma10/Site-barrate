jQuery(document).ready(function($) {
    // Votre code ici avec les appels à la fonction $()
    
    // Load this when the DOM is ready
$(function(){
  // You used .myCarousel here. 
  // That's the class selector not the id selector,
  // which is #myCarousel
  $('#carouselExampleInterval').carousel();
});
 });




 $(function(){
  $(".myPopover").popover();
});

    