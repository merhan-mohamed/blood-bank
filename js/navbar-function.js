// navbar function
$("nav ul li .nav-link,.footer ul li a,.carousel-item a").click(function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 100
    }, 1000);
});


$( function() {
  $( "#datepicker" ).datepicker();
} );

$( function() {
  $( "#datepicker1" ).datepicker();
} );

