document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
// tooltip

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

var badge = document.getElementById('badge')

function tes(params) {
    setInterval(function () {
        badge.innerHTML = `<i class="fas fa-podcast"></i>`
    }, 1000);
    setInterval(function () {
        badge.innerHTML = `<i class="fas fa-podcast"></i><span class="badge badge-head badge-danger">New</span>`
    }, 2000);
    setInterval(function () {
        badge.innerHTML += `<span class="badge badge-head badge-danger">Podcast himsi</span>`
    }, 3000);
}

tes();

var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false
});

var elem_tow = document.querySelector('.carousel-steatment');
var flkty_two = new Flickity(elem_tow, {
    freeScroll: true,
    contain: true,
    prevNextButtons: true,
    pageDots: false
});

var elem_three = document.querySelector('.carousel-tes');
var flkty_three = new Flickity(elem_three, {
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    lazyLoad: 1
});

var message = "HIMSI FASILKOM UNIVERSITAS  SRIWIJAYA 2021";

function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }

if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }

document.onmousedown = rtclickcheck;

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}

var preloader = document.getElementById('preloader-active')


var preloader = document.getElementById('preloader-active')
var elem = document.querySelector('.preloader');

function loader(params) {
    setTimeout(function () {
        elem.style.display = "none";
    }, 2000);
}
  
loader();
