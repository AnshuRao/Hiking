$(document).ready(function(){
    $(".menu-icon").click(function(){
        $("#menu").toggleClass("active")
        $(".sidebar").toggleClass("active1")

    })
});

VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 25,
    speed: 400
});

