$(function(){
    $('.divtop').on('click', function(){
    $('.odd').toggleClass('odd_on');

    });
});

$(function(){
    $('.divtop').on('click', function(){
    $('.divtop').toggleClass('odd_on2');

    });
});

$(function(){
    $('.divtop').on('click', function(){
    $('.introbtn').toggleClass('btnflip');

    });
});

$(function(){
    $('.divtop').on('click', function(){
    $('.divtop').toggleClass('divtopalt');

    });
});


$(function(){
    $('.divtop').on('click', function(){
    $('.presser1').toggleClass('p1alt');

    });
});

$(function(){
    $('.btnbg').hover(function(){
    $('.btn_right').toggleClass('btn_p');

    });
});

$(function(){
    $('.btn_target').hover(function(){
    $('.btn_right').toggleClass('btn_p');

    });
});

$(function(){
    $('.btn_right').hover(function(){
    $('.btn_right').toggleClass('btn_p');

    });
});

$(function(){
    $('.btnmod1_target').hover(function(){
    $('.btn_right').toggleClass('btn_p');

    });
});

$(function(){
    $('.btn_left').hover(function(){
    $('.btn_right').toggleClass('btn_p');

    });
});

$(function(){
    $('.btn_left').hover(function(){
    $('.btn_right').toggleClass('btn_p');

    });
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

function show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }

  