

// project hover
$(".project-1").hover(function(){
  $(".project-title-1").toggleClass("show");
});

$(".project-title-1").hover(function(){
  $(".project-1").toggleClass("low-opacity");
});

$(".project-title-1").hover(function(){
  $(".project-title-1").toggleClass("show");
});
//---------------
$(".project-2").hover(function(){
  $(".project-title-2").toggleClass("show");
});

$(".project-title-2").hover(function(){
  $(".project-2").toggleClass("low-opacity");
});

$(".project-title-2").hover(function(){
  $(".project-title-2").toggleClass("show");
});
//---------------
$(".project-3").hover(function(){
  $(".project-title-3").toggleClass("show");
});

$(".project-title-3").hover(function(){
  $(".project-3").toggleClass("low-opacity");
});

$(".project-title-3").hover(function(){
  $(".project-title-3").toggleClass("show");
});
//---------------
$(".project-4").hover(function(){
  $(".project-title-4").toggleClass("show");
});

$(".project-title-4").hover(function(){
  $(".project-4").toggleClass("low-opacity");
});

$(".project-title-4").hover(function(){
  $(".project-title-4").toggleClass("show");
});
//---------------
$(".project-5").hover(function(){
  $(".project-title-5").toggleClass("show");
});

$(".project-title-5").hover(function(){
  $(".project-5").toggleClass("low-opacity");
});

$(".project-title-5").hover(function(){
  $(".project-title-5").toggleClass("show");
});
//---------------
$(".project-6").hover(function(){
  $(".project-title-6").toggleClass("show");
});

$(".project-title-6").hover(function(){
  $(".project-6").toggleClass("low-opacity");
});

$(".project-title-6").hover(function(){
  $(".project-title-6").toggleClass("show");
});
//---------------
$(".project-7").hover(function(){
  $(".project-title-7").toggleClass("show");
});

$(".project-title-7").hover(function(){
  $(".project-7").toggleClass("low-opacity");
});

$(".project-title-7").hover(function(){
  $(".project-title-7").toggleClass("show");
});
//---------------
$(".project-8").hover(function(){
  $(".project-title-8").toggleClass("show");
});

$(".project-title-8").hover(function(){
  $(".project-8").toggleClass("low-opacity");
});

$(".project-title-8").hover(function(){
  $(".project-title-8").toggleClass("show");
});
//---------------
$(".project-9").hover(function(){
  $(".project-title-9").toggleClass("show");
});

$(".project-title-9").hover(function(){
  $(".project-9").toggleClass("low-opacity");
});

$(".project-title-9").hover(function(){
  $(".project-title-9").toggleClass("show");
});
//---------------
$(".project-10").hover(function(){
  $(".project-title-10").toggleClass("show");
});

$(".project-title-10").hover(function(){
  $(".project-10").toggleClass("low-opacity");
});

$(".project-title-10").hover(function(){
  $(".project-title-10").toggleClass("show");
});

//Smooth Scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      $('a').each(function () {
           $(this).removeClass('active');
       })
       $(this).addClass('active');

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



$(document).ready(function(){
     $('body,html').animate({
         scrollTop: 0
     }, 800);
 $('#go-top').click(function () {
     $('body,html').animate({
         scrollTop: 0
     }, 800);
     return false;
 });
});
