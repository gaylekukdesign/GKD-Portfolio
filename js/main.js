
function sectionHover(id){
    var projectId = ".project-"+id;
    var projectTitleId = ".project-title-"+id;

    $(projectId).hover(function(){
        $(projectTitleId).toggleClass("show");
    });

    $(projectTitleId).hover(function(){
        $(projectId).toggleClass("low-opacity");
    });

    $(projectTitleId).hover(function(){
        $(projectTitleId).toggleClass("show");
    });
}

for (var i = 1; i<=10; i++){
    sectionHover(i);
}

//Smooth Scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
    $('#go-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
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


// responsive nav
$(document).ready(function() {

$( ".cross" ).hide();
$( ".menu-toggle" ).hide();
$( ".hamburger-icon").click(function() {
$( ".menu-toggle").slideToggle( 300, function() {
$( ".hamburger-icon" ).hide();
$( ".cross" ).show();
});
});

$( ".cross").click(function() {
$( ".menu-toggle" ).slideToggle( 300, function() {
$( ".cross" ).hide();
$( ".hamburger-icon" ).show();
});
});

$( ".menu-toggle a li").click(function() {
$( ".menu-toggle" ).slideToggle( 300, function() {
$( ".cross" ).hide();
$( ".hamburger-icon" ).show();
});
});


});
