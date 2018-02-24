$('.img1').addClass('animated fadeIn');
$('.kamil').addClass('animated bounceInDown');
$('.a').addClass('animated flipInY');

$(document).ready(function () {
    // baner
    var ban = $('.ban');
    ban.owlCarousel({
        'items': 1,
        'loop': true,
        'mouseDrag': false,
        'rewind': true,
        'dots': true,
        'autoplay': true,
        'autoplayTimeout': 3000,
        'autoplayHoverPause': false,
        'autoHeight': false
    });
});

$(document).ready(function () {
    // baner
    var aan = $('.aan');
    aan.owlCarousel({
        'items': 1,
        'loop': true,
        'mouseDrag': false,
        'rewind': true,
        'dots': true,
        'autoplay': true,
        'autoplayTimeout': 3000,
        'autoplayHoverPause': false,
        'autoHeight': false
    });
});

$('.social li a').on('click', function (event) {
    event.preventDefault();
    var href = $(this).attr('href');
    var offset = $(href).offset();
    var body = $('body, html');
    body.stop().animate({ scrollTop: offset.top }, '500');
});

$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// function dobry(){
//     var today = new Date();
//     var hourNow = today.getHours();
//     var greeting;
    
//     if(hourNow > 18){
//         greeting = 'Dobry Wieczór!';
//     } else if(hourNow > 12){
//         greeting = 'Dzień dobry!';
//     } else if(hourNow > 0){
//         greeting = 'Witamy!';
//     }
    
//     document.write('<h3>' + greeting + '</h3>');
// } 
// dobry();

// h3.style.color = 'red';
// h3.style.fontSize = '20px';

// var div = document.createElement('div');
// div.dobry();
// var h3 = document.getElementById('social')
// h3.appendChild(div.dobry());

