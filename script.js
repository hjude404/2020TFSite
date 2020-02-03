// get dat button
button = document.getElementById("scrollBtn");

// show button after scrolling 1000 pixels
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Make the button work when clicked
function topFunction() {
    document.documentElement.scrollTop = 0;
}