$(document).ready(function(){

    $(".Third-Section .owl-carousel").owlCarousel(
        {
            margin:10,
            loop:true,
            rtl:true,
            responsive:{
                0:{
                    items:1, 
                    nav:true  
                    
                },
                600:{
                    items:2, 
                    nav:true      
                },
                1000:{
                    items:3,
                    nav:true
                   
                    

                }
            }  

        })
    

var owl = $('.owl-carousel');
owl.owlCarousel();
    
$("#slider").owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    $('#slider').trigger('next.owl.carousel');
});
// Go to the previous item
$('.customPrevBtn').click(function() {
    $('#slider').trigger('prev.owl.carousel');
});

});







