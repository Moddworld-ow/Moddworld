
$(function(){
    $('.divtop').on('click', function(){
    $('.introbtn').toggleClass('btnflip');

    });
});

$(function(){
    $('.divtop').on('click', function(){
    $('.presser1').toggleClass('p1alt');

    });
});

$(document).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".coolfollow").css("top", "0" + (scroll / 1.5) + "px");
  });

  $(window).on('load', function() {
	$(".loader").delay(7000).hide();
	$(".container").delay(2000).fadeIn(1);
});


var parallax = document.querySelectorAll(".parallax");
var	speed = -0.25;

window.onscroll = function() {
	[].slice.call(parallax).forEach(function(el, i) {

		var windowYOffset = window.pageYOffset,
			elBackgrounPos = "50%" + (windowYOffset * speed + i * -100) + "px";

		el.style.backgroundPosition = elBackgrounPos;

	});
};

var rellax = new Rellax('.rellax');




