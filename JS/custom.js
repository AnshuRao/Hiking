$(document).ready(function(){
    $(".menu-icon").click(function(){
        $("#menu").toggleClass("active2")
        $(".sidebar").toggleClass("active1")

    })
});



VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 30,
    speed: 400,
    gyroscope:              true,    // Boolean to enable/disable device orientation detection,
    gyroscopeMinAngleX:     -45,     // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    gyroscopeMaxAngleX:     45,      // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    gyroscopeMinAngleY:     -45,     // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY:     45,   
});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

