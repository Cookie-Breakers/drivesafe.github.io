
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    } else {
    btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

// Sticky Navbar
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbarResponsive");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}

