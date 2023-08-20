let targetanim1 = document.querySelector(".btn1anim");
let targetanim2 = document.querySelector(".btn_2");
let targetanim3 = document.querySelector(".btn_3");
let targetanim4 = document.querySelector(".btn_4");

let targetanimshadow1 = document.querySelector(".btn1shadow");
let targetanimshadow2 = document.querySelector(".btn1shadow2");
let targetanimshadow3 = document.querySelector(".btn1shadow3");

let black_cover1 = document.querySelector(".cover_screen1");
let black_cover2 = document.querySelector(".cover_screen2");
let black_cover3 = document.querySelector(".cover_screen3");

let starter_btn = document.querySelector(".starter_btn");

let targetcontainer1 = document.querySelector(".obstacle_container1");

let targetcontainer2 = document.querySelector(".obstacle_container2");

let targetcontainershadow1 = document.querySelector(".obstacle_container1shadow");

let targetcontainershadow2 = document.querySelector(".obstacle_container2shadow");

let targetcontainerwarning1 = document.querySelector(".obstacle_container1warning");

let targetcontainerwarning2 = document.querySelector(".obstacle_container2warning");




let anim1type;
let anim2type;

let anim1delay;
let anim2delay;

let obstacle1top;
let obstacle1left;
let obstacle1scale;

let obstacle2top;
let obstacle2left;
let obstacle2scale;

let anim1wdur;
let anim2wdur;


let obstacleanimduration = 35000;






let comboValue = 1;
let hoverTime = 0;
let clickCount = 0;
let inactivityTime = 0;







let offset_left = "-20%";
let offset_top = "-120%";
let offset_rotate = "90deg";
let offset_scale = "150%";




let offset_rotate2 = 0;



$(".starter_btn").click(function() {
    start_all();


}

)

var r = document.querySelector(':root');




function start_all() {

$(function() {
    let current_amount = 0;
    let intervalId;
    let isHovering = false;
    let debounceInterval = 50; // Debounce interval time in milliseconds


    // Track mouse movement over btn_2 to reset inactivityTime and trigger hover behavior
    $(".btn_2").mousemove(function() {
        if (!isHovering) {
            isHovering = true;
            intervalId = setInterval(function() {
                current_amount += 3 * comboValue;
                update_score();
                if (hoverTime < 5) {
                    hoverTime++;
                    handleHover(true);
                    
                }
            }, debounceInterval); // Debounce the interval start
        }
        resetInactivity();
    });

    $(".btn_2").mouseout(function() {
        
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        isHovering = false;
        setTimeout(function(){hoverTime = 0;}, 50);
        handleHover(false);
        update_combo();

    },
    function() {

        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        isHovering = false;
        setTimeout(function(){hoverTime = 0;}, 50);
        resetInactivity();
    
    });

    // ...

   // Function to handle button hover
   function handleHover(isHoverStart) {
        if (isHoverStart) {
            hoverTime = Math.min(5, hoverTime + 1); // Increase hover time, max value is 5
        } else {
            setTimeout(function(){hoverTime = 0;}, 50);
        }
        resetInactivity(); // Reset inactivity when hovering changes
    }
    
    $(".btn_4").click(function() {
        resetInactivity()
        setInterval(current_amount += parseInt($(this).text().replace("+", "") * comboValue), 50);
        update_score();
        update_combo();
        comboValue = comboValue + 1;
    });
    
    $(".btn_3").click(function() {
        resetInactivity()
        current_amount += parseInt($(this).text().replace("+", "") * comboValue);
        update_score();
        handleClick();
        update_combo();
    });

    $(".btn_1").hover(function() {
        resetInactivity()
        setInterval(current_amount += parseInt($(this).text().replace("+", "") * comboValue), 50);
        update_score();
        handleClick();
        update_combo();
    });


    function update_score() {
        var scoreDisplay = document.getElementsByClassName('score_display')[0];
        scoreDisplay.innerHTML = current_amount;

        // Add animation class
        scoreDisplay.classList.add('animate_score');

        // Remove animation class after a delay
        setTimeout(function() {
            scoreDisplay.classList.remove('animate_score');
        }, 25); // Adjust the delay as needed (e.g., 1000ms = 1 second)
    }



    // Interval to check and update the combo
    setInterval(() => {
    
        if (clickCount >= 5) {
            comboValue++;
            console.log("Combo increased! New comboValue:", comboValue);
            clickCount = 0; // Reset clickCount after reaching 5
        } else if (clickCount > 0) {
            clickCount = 0; // Reset clickCount if clicked once
        }
    
        if (hoverTime >= 5) {
            comboValue++;
            console.log("Combo increased! New comboValue:", comboValue);
            setTimeout(function(){hoverTime = 0;}, 50);
        }
    
        if (inactivityTime >= 1 && comboValue > 1) {
            comboValue = 1; // Reset comboValue if no interaction for 1 second
            console.log("Combo reset!");
            inactivityTime = 0; // Reset inactivityTime
        } else if (hoverTime === 0 && clickCount === 0) {
            inactivityTime++;
        }
    
        update_combo(); // Update combo display value
    
    }, 1000);

    // Function to handle button click
    function handleClick() {
        
        clickCount++;
        inactivityTime = 0; // Reset inactivityTime when interaction occurs
    }

    // Function to update combo display
    function update_combo() {
        var comboDisplay = document.getElementsByClassName('combo_display')[0];
        comboDisplay.innerHTML = "x" + comboValue;
    }

function resetInactivity() {
    inactivityTime = 0; // Reset inactivityTime when interaction occurs
}
});



function get_var() {
var rs = getComputedStyle(r);
}

function change_btn_offset_left() {
r.style.setProperty('--left_mod', offset_left);
}

function change_btn_offset_top() {
r.style.setProperty('--top_mod', offset_top);

}

function change_btn_offset_rotate() {
r.style.setProperty('--rotate_mod', offset_rotate);

}

function fix_btn_offset_rotate() {
r.style.setProperty('--rotate_fix', "-" + offset_rotate);
    
    }

function change_btn_offset_scale() {
r.style.setProperty('--scale_mod', offset_scale);

}

function randomizemod1() {
    
    fix_btn_offset_rotate();
    change_btn_offset_rotate();

    change_btn_offset_left();

    change_btn_offset_top();

    change_btn_offset_scale();

}

function randomizemod2() {


        r.style.setProperty('--left_mod2', offset_left2);
        
        

        r.style.setProperty('--top_mod2', offset_top2);
        
        
        
        r.style.setProperty('--rotate_mod2', offset_rotate2);



        r.style.setProperty('--rotate_fix2', "-" + offset_rotate2);
        
        
        
        r.style.setProperty('--scale_mod2', offset_scale2);


    
}

function randomizemod3() {

    r.style.setProperty('--left_mod3', offset_left3);
    
    

    r.style.setProperty('--top_mod3', offset_top3);
    
    
    
    r.style.setProperty('--rotate_mod3', offset_rotate3);
    
    
    
    r.style.setProperty('--rotate_fix3', "-" + offset_rotate3);
        
    
    
    r.style.setProperty('--scale_mod3', offset_scale3);



}


function randomizemod4() {

    r.style.setProperty('--left_mod4', offset_left4);
    
    

    r.style.setProperty('--top_mod4', offset_top4);
    
    
    
    r.style.setProperty('--rotate_mod4', offset_rotate4);
    
    
    
    r.style.setProperty('--rotate_fix4', "-" + offset_rotate4);
        
    
    
    r.style.setProperty('--scale_mod4', offset_scale4);



}



function randomizemodvalues() {

offset_rotate = Math.floor((Math.random() * 500) + 1) + "deg";
offset_scale = Math.max(Math.min(Math.floor((Math.random() * 200) + 1), 180), 40) + "%";
offset_left = Math.floor((Math.random() * 10) + 1) + "%";
offset_top = Math.floor((Math.random() * 10) + 1) + "%";

}

function randomizemodvaluesmod2() {

    offset_rotate2 = Math.floor((Math.random() * 200) + 1) + "deg";
    offset_scale2 = Math.max(Math.min(Math.floor((Math.random() * 180) + 1 - 90), 180), 60) + "%";
    offset_left2 = Math.floor((Math.random() * 101) - 50) + "%";
    offset_top2 = Math.floor((Math.random() * 151) - 50) + "%";
    
    }

    function randomizemodvaluesmod3() {

        offset_rotate3 = Math.floor((Math.random() * 200) + 1) + "deg";
        offset_scale3 = Math.max(Math.min(Math.floor((Math.random() * 300) + 1 - 50), 150), 40) + "%";
        offset_left3 = Math.floor((Math.random() * 101) - 50) + "%";
        offset_top3 = Math.floor((Math.random() * 101) - 50) + "%";
        
        }

        function randomizemodvaluesmod4() {

            offset_rotate4 = Math.floor((Math.random() * 500) + 1) + "deg";
            offset_scale4 = Math.max(Math.min(Math.floor((Math.random() * 300) + 1 - 100), 150), 60) + "%";
            offset_left4 = Math.floor((Math.random() * 101) -50) + "%";
            offset_top4 = Math.floor((Math.random() * 101) -50) + "%";
            
            }

function reroll_mod2() {

    randomizemodvaluesmod2();
    randomizemod2();
            
    }
            
    setInterval(reroll_mod2, 20000);


    
function reroll_mod3() {

   
        randomizemodvaluesmod3();
        randomizemod3();
                console.log(offset_scale3);
        }

        setInterval(reroll_mod3, 30000);
        reroll_mod3();

    
function reroll_mod4() {

        randomizemodvaluesmod4();
        randomizemod4();

        }
        
        setInterval(reroll_mod4, 25000);
        reroll_mod4();








let animdelay_mod = "0s";
let animdelay_mod_pure = 0;

    function reroll_delay() {
    animdelay_mod_pure = Math.floor(Math.random() * 10000) + 1, 700;
    
    }
    
    function convert_delay() {
    animdelay_mod = animdelay_mod_pure + "s";
    
    }

    let iteration = 0;
    let offset_rotate3pure = 0

    function rotate_smooth(iteration = 0) {

    
        if (iteration < 500) {
            offset_rotate3pure += 1; // Increase the rotation value by 1 degree
            offset_rotate3 = offset_rotate3pure + "deg";
            r.style.setProperty('--rotate_mod3', offset_rotate3);
            console.log(offset_rotate3);
    
            setTimeout(() => {
                rotate_smooth(iteration + 1);
            }, 50); // Adjust the delay time in milliseconds
        }

   
    }

let running;

function check_anim_state() {
running = document.querySelector(".btn_1").style.animationPlayState === 'running';

}

function change_state_yes() {

document.querySelector(".btn_1").style.animationPlayState = 'running';

}

function change_state_no() {

document.querySelector(".btn_1").style.animationPlayState = 'paused';
    
}

    
function update_anim_time() {
    
    r.style.setProperty('--anim_time', anim_time_converted + "s");
}


function reroll_anim_time() {
    anim_time = Math.floor(Math.random() * 20000) + 1;
    
}

function convert_anim_time() {
    anim_time_converted = anim_time * 1/1000;

}

let anim_time = 15000;
let anim_time_converted = anim_time * 1/1000 + "s";





let anim_speed_mod = 1; // Initial speed modifier
let baseAnimationDuration = 15000; // Base animation duration in milliseconds

function reroll_anim_speed_mod() {
    anim_speed_mod = Math.floor(Math.random() * 2) + 1;
    console.log("Current anim speed mod:", anim_speed_mod);
}

function updateAnimation() {

    randomizemodvalues();
    randomizemod1();
    reroll_anim_speed_mod();
  
    const elements = document.querySelectorAll(".btn_1, .btn1shadow, .btn1shadow2, .btn1shadow3");
  
    // Calculate the new animation duration by dividing the base duration by the animation speed modifier
    const newAnimationDuration = baseAnimationDuration / anim_speed_mod;
  
    // Loop through each selected element and update its animation duration using the style property
    elements.forEach(element => {
      element.style.animationDuration = `${newAnimationDuration}ms`;
    });
  
    console.log(newAnimationDuration);
  }
  
  // Initial call to start the animation loop
  setInterval(updateAnimation, baseAnimationDuration / anim_speed_mod);








function startall2() {}



function runanims() {

    starter_btn.style.animationPlayState = 'running';


    targetanim1.style.animationPlayState = 'running';
    targetanim2.style.animationPlayState = 'running';
    targetanim3.style.animationPlayState = 'running';
    targetanim4.style.animationPlayState = 'running';

    targetanimshadow1.style.animationPlayState = 'running';
    targetanimshadow2.style.animationPlayState = 'running';
    targetanimshadow3.style.animationPlayState = 'running';


    black_cover1.style.animationPlayState = 'running';
    black_cover2.style.animationPlayState = 'running';
    black_cover3.style.animationPlayState = 'running';


    targetcontainer1.style.animationPlayState = 'running';
    targetcontainer2.style.animationPlayState = 'running';
    targetcontainershadow1.style.animationPlayState = 'running';
    targetcontainershadow2.style.animationPlayState = 'running';
    targetcontainerwarning1.style.animationPlayState = 'running';
    targetcontainerwarning2.style.animationPlayState = 'running';

}


function startnormalanims() {

    r.style.setProperty('--anim1type', 'obstacle1move 30s 8s infinite');
    r.style.setProperty('--anim2type', 'obstacle2move 40s 24s infinite');


    r.style.setProperty("--anim1wdur", "15s")

    r.style.setProperty("--anim2wdur", "10s")

    r.style.setProperty("--anim1wdel", "8s")

    r.style.setProperty("--anim2wdel", "24s")


    r.style.setProperty("--shadow1delay", "8.05s")

    r.style.setProperty("--shadow2delay", "24.1s")


    r.style.setProperty('--containerrotate', '90deg');

    r.style.setProperty('--obstacle1top', '300%');
    r.style.setProperty('--obstacle1left', '80%');
    r.style.setProperty('--obstacle1scale', '200%');

    r.style.setProperty('--obstacle2top', '50%');
    r.style.setProperty('--obstacle2left', '0%');
    r.style.setProperty('--obstacle2scale', '150%');

    obstacleanimduration = 45000;


}






runanims();





function starthardanims() {

    r.style.setProperty('--anim1type', 'obstacle1movehard 7.5s 10s infinite');
    r.style.setProperty('--anim2type', 'obstacle2movehard 10s 20s infinite');



    r.style.setProperty("--anim1wdur", "2s")

    r.style.setProperty("--anim2wdur", "2s")

    r.style.setProperty("--anim1wdel", "9s")

    r.style.setProperty("--anim2wdel", "19s")


    r.style.setProperty("--shadow1delay", "10.05s")

    r.style.setProperty("--shadow2delay", "20.05s")


    r.style.setProperty('--containerrotate', '0%');

    r.style.setProperty('--obstacle1top', '-40%');
    r.style.setProperty('--obstacle1left', '200%');
    r.style.setProperty('--obstacle1scale', '80%');

    r.style.setProperty('--obstacle2top', '-200%');
    r.style.setProperty('--obstacle2left', '-30%');
    r.style.setProperty('--obstacle2scale', '80%');

    obstacleanimduration = 35000;


}



function starthard2anims() {
    starthardanims();

    r.style.setProperty('--anim1type', 'obstacle1movehard2 15s 10s infinite');
    r.style.setProperty('--anim2type', 'obstacle2movehard2 25s 20s infinite ease-in');



    r.style.setProperty("--anim1wdur", "2s")

    r.style.setProperty("--anim2wdur", "4s")

    r.style.setProperty("--anim1wdel", "9s")

    r.style.setProperty("--anim2wdel", "19s")


    r.style.setProperty("--shadow1delay", "10.05s")

    r.style.setProperty("--shadow2delay", "20.05s")


    r.style.setProperty('--containerrotate', '0%');

    r.style.setProperty('--obstacle1top', '150%');
    r.style.setProperty('--obstacle1left', '0%');
    r.style.setProperty('--obstacle1scale', '80%');

    r.style.setProperty('--obstacle2top', '-230%');
    r.style.setProperty('--obstacle2left', '-30%');
    r.style.setProperty('--obstacle2scale', '80%');


    obstacleanimduration = 40000;

}

setTimeout(starthardanims, obstacleanimduration);


function select_obstacleset(){
    obstacle_setID = Math.floor(Math.random() * 3 + 1);

}

function runchoosenset() {


        if (obstacle_setID == 1) {console.log("set1");

        startnormalanims();


        } else if (obstacle_setID  == 2) {console.log("set2");

        starthardanims();


        

        } else if (obstacle_setID  == 3) {console.log("set3");

        starthard2anims();    
       
               }
        else {console.log("this cant happen");
      }

    }

function deployobstacle() {
    select_obstacleset();
    runchoosenset();
}



function obstacle_loop (){

    setInterval(deployobstacle, obstacleanimduration)
}



obstacle_loop();































}

function failstate(){

r.style.setProperty("--failstate_opacity", "100%");
r.style.setProperty("--failstate_fontsize", "75px");

}





$(".rectangle_shape").mouseenter(function() {
    failstate();
});

$(".circle_shape").mouseenter(function() {
    failstate();
});

$(".rectangle_shape").mouseleave(function() {
    failstate();
});

$(".circle_shape").mouseleave(function() {
    failstate();
});





var div = $('.btns_container');
var width = div.width() * (100 / 100);
div.css('height', width);

setInterval(oneSecondFunction, 200);

function oneSecondFunction() {
    var div = $('.btns_container');
    var width = div.width() * (50 / 100);
    div.css('height', width);
}
