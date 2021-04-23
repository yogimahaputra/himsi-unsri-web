document.addEventListener("DOMContentLoaded", function(){
            
    window.addEventListener('scroll', function() {
       
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

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

var badge = document.getElementById('badge')

function tes(params) {
    setInterval(function(){ 
        badge.innerHTML = `<i class="fas fa-podcast"></i>`
    }, 1000);
    setInterval(function(){ 
        badge.innerHTML = `<i class="fas fa-podcast"></i><span class="badge badge-danger">New</span>`
    }, 2000);
    setInterval(function(){ 
        badge.innerHTML += `<span class="badge badge-danger">Podcast himsi</span>`
    }, 3000);
}

tes();

