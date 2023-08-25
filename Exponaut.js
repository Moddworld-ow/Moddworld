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
let starter_btn_endless = document.querySelector(".starter_btn_endless");
let starter_btn_tutorial = document.querySelector(".starter_btn_tutorial");

let targetcontainer1 = document.querySelector(".obstacle_container1");

let targetcontainer2 = document.querySelector(".obstacle_container2");

let targetcontainershadow1 = document.querySelector(".obstacle_container1shadow");

let targetcontainershadow2 = document.querySelector(".obstacle_container2shadow");

let targetcontainerwarning1 = document.querySelector(".obstacle_container1warning");

let targetcontainerwarning2 = document.querySelector(".obstacle_container2warning");

let onetimebtn = document.querySelector(".onetimebtn");




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


let targetScore = 10000;





let button2_effect_target = document.querySelector(".btn_2");










let comboValue = 1;
let hoverTime = 0;
let clickCount = 0;
let inactivityTime = 0;







let offset_left = "-20%";
let offset_top = "-120%";
let offset_rotate = "90deg";
let offset_scale = "150%";





let offset_rotate2 = 0;










let endless_mode = false;







$(".starter_btn").click(function() {
    start_all();


}

)

$(".starter_btn_endless").click(function() {
    start_all();
    endless_mode = true;


}

)

$(".starter_btn_tutorial").click(function() {
    start_all();


}

)

var r = document.querySelector(':root');




function start_all() {

const sound_click = new Audio("click.ogg");

    
let comboValue = 1;
let current_amount = 0;



r.style.setProperty('--animstate', "running");




$(function() {

    let intervalId;
    let isHovering = false;
    let debounceInterval = 50; // Debounce interval time in milliseconds


    // Track mouse movement over btn_2 to reset inactivityTime and trigger hover behavior
    $(".btn_2").mousemove(function() {

        checkScore();

        if (!isHovering) {
            isHovering = true;

            intervalId = setInterval(function() {
                current_amount += 3 * comboValue;
                update_score();


                increase_bar();


                score_increase ="+" + 3 * comboValue;

                triggerCustomEffect();

                const sound_click = new Audio("click.ogg");
                sound_click.play();



                if (hoverTime < 5) {
                    hoverTime++;
                    handleHover(true);
                    
                }
            }, debounceInterval); // Debounce the interval start
        }
        resetInactivity();
    });




    $(".btn_2").mouseout(function() {


        checkScore();

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



    let startTime = null;
    let endTime = null;


    let timerInterval; // To store the interval ID
    let elapsedTime = 0; // To store the elapsed time


    function updateTimerDisplay(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      document.getElementById('timer_display').textContent = formattedTime;
    }

    function startTimer() {
      timerInterval = setInterval(() => {
        elapsedTime++;
        updateTimerDisplay(elapsedTime);
      }, 1000);
    }

    function detailed_time() {
  
          hours = Math.floor(elapsedTime / 3600);
          minutes = Math.floor(elapsedTime / 60);
          seconds = Math.floor(elapsedTime) - minutes * 60;
          hundredths = elapsedTime % 100; };


    function stopTimer() {
      clearInterval(timerInterval);
      // Now `elapsedTime` contains the elapsed time in seconds
      console.log(`Elapsed Time: ${elapsedTime} seconds`);

      detailed_time();

      var win_screen = document.getElementsByClassName('winstate')[0];
      win_screen.innerHTML = "You reached the target score of " + targetScore + " points in " + minutes + "m " + seconds + "s";
    }


    startTimer();

    

    function checkScore() {
        if (current_amount >= targetScore) {
            console.log(`Target score of ${targetScore} reached!`);
            
            
        

            if (endless_mode == false) {
            winstate();
            stopTimer(); }

        } else {
            console.log(`Current score: ${current_amount}`);
        }


    }



    // ...

   // Function to handle button hover
   function handleHover(isHoverStart) {
        if (isHoverStart) {
            hoverTime = Math.min(10, hoverTime + 1); // Increase hover time, max value is 5
        } else {
            setTimeout(function(){hoverTime = 0;}, 100);
        }
        resetInactivity(); // Reset inactivity when hovering changes
    }
    
    $(".btn_4").click(function() {
        resetInactivity()
        comboValue = comboValue + 1;
        
        update_score();

        checkScore();

        update_combo();

        const sound_click = new Audio("click.ogg");
        sound_click.play();



        increase_bar_strong();



        score_increase = "Combo Increased!";

        triggerCustomEffect();


    });
    
    $(".btn_3").click(function() {
        resetInactivity()
        current_amount += parseInt($(this).text().replace("+", "") * comboValue);
        update_score();

        checkScore();

        handleClick();

        update_combo();

        const sound_click = new Audio("click.ogg");
        sound_click.play();


        increase_bar_strong();



        score_increase ="+" + 25 * comboValue;

        triggerCustomEffect();


    });

    $(".btn_1").hover(function() {
        resetInactivity()
        setInterval(current_amount += parseInt($(this).text().replace("+", "") * comboValue), 50);
        update_score();

        checkScore();

        handleClick();

        update_combo();

        const sound_click = new Audio("click.ogg");
        sound_click.play();



        increase_bar();



        score_increase ="+" + 15 * comboValue;

        triggerCustomEffect();

    });




    $("#onetimebtn_1").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn1 = document.getElementById("onetimebtn_1");
    
        // Add a class to the element to apply the override with transition
        onetimebtn1.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        increase_bar_strong();

    });

    $("#onetimebtn_2").click(function() {
        resetInactivity();
        current_amount += 7500 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn2 = document.getElementById("onetimebtn_2");
    
        // Add a class to the element to apply the override with transition
        onetimebtn2.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        increase_bar_strong();

    });

    $("#onetimebtn_3").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn3 = document.getElementById("onetimebtn_3");
    
        // Add a class to the element to apply the override with transition
        onetimebtn3.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        increase_bar_strong();

    });


    $("#onetimebtn_4").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn4 = document.getElementById("onetimebtn_4");
    
        // Add a class to the element to apply the override with transition
        onetimebtn4.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        increase_bar_strong();

    });


    $("#onetimebtn_5").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn5 = document.getElementById("onetimebtn_5");
    
        // Add a class to the element to apply the override with transition
        onetimebtn5.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        increase_bar_strong();

    });


    $("#onetimebtn_6").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn6 = document.getElementById("onetimebtn_6");
    
        // Add a class to the element to apply the override with transition
        onetimebtn6.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        increase_bar_strong();

    });


    $("#onetimebtn_7").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn7 = document.getElementById("onetimebtn_7");
    
        // Add a class to the element to apply the override with transition
        onetimebtn7.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        increase_bar_strong();

    });


    $("#onetimebtn_8").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn8 = document.getElementById("onetimebtn_8");
    
        // Add a class to the element to apply the override with transition
        onetimebtn8.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        increase_bar_strong();

    });




    // Interval to check and update the combo
    setInterval(() => {
    
        if (clickCount >= 3) {
            comboValue++;


            console.log("Combo increased! New comboValue:", comboValue);
            clickCount = 0; // Reset clickCount after reaching 5
            
            r.style.setProperty('--combo_increased', "1vw red solid");

            setTimeout(function(){r.style.setProperty('--combo_increased', "0vw black solid");}, 150);

            r.style.setProperty('--combo_fontsize', "2.5vw");

        } else if (clickCount > 0) {
            clickCount = 0; // Reset clickCount if clicked once
        }
    
        if (hoverTime >= 3) {
            comboValue++;
            console.log("Combo increased! New comboValue:", comboValue);

            setTimeout(function(){hoverTime = 0;}, 50);

            r.style.setProperty('--combo_increased', "1vw red solid");
            setTimeout(function(){r.style.setProperty('--combo_increased', "0vw black solid");}, 150);
        }
    
        if (inactivityTime >= 1 && comboValue > 0) {
            comboValue = 1; // Reset comboValue if no interaction for 1 second
            console.log("Combo reset!");
            inactivityTime = 1; // Reset inactivityTime

            r.style.setProperty('--combo_fontsize', "2vw");

            r.style.setProperty('--combo_fontcolor', "red");

            setTimeout(function(){r.style.setProperty('--combo_fontcolor', "black")}, 200);

        } else if (hoverTime === 0 && clickCount === 0) {
            inactivityTime++;
        }
    
        update_combo(); // Update combo display value

        var comboDisplay = document.getElementsByClassName('combo_display')[0];
        comboDisplay.innerHTML = "x" + comboValue;


        // Add animation class
        comboDisplay.classList.add('animate_combo');

        // Remove animation class after a delay
        setTimeout(function() {
            comboDisplay.classList.remove('animate_combo');

        }, 250);
    
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
    starter_btn_endless.style.animationPlayState = 'running';
    starter_btn_tutorial.style.animationPlayState = 'running';


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


    onetimebtn.style.animationPlayState = "running";

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





const sound_meter_filled = new Audio("meter_filled.wav");

const feverElement = document.querySelector(".fever");
const fevercover = document.querySelector(".fevermeter_cover");

const fevertext1 = document.querySelector(".multiplied_text");
const fevertext2 = document.querySelector(".multiplied_text_right");


let decreaseTimeout;


var isActive = false;


    function update_score() {
        var scoreDisplay = document.getElementsByClassName('score_display')[0];
        scoreDisplay.innerHTML = current_amount;

        // Add animation class
        scoreDisplay.classList.add('animate_score');

        // Remove animation class after a delay
        setTimeout(function() {
            scoreDisplay.classList.remove('animate_score');
        }, 25);


        if (current_amount >= 1000000 && isActive == false) {

            const points_reached_loop = new Audio("coolloop.wav");
        
            points_reached_loop.loop=true;
            points_reached_loop.play();
        
            isActive = true;
            
        
        }


            if (current_amount >= 1000000 && current_amount < 1000000000) {

                r.style.setProperty('--variable_width', '12vw');

        }

            else if (current_amount >= 1000000000) {

                r.style.setProperty('--variable_width', '16vw');

        }




    }



function increase_bar() {
  
  feverElement.style.transitionDuration = "5s"; // Set transition duration to 0 to instantly grow

  feverElement.style.height = "100%";

  clearTimeout(decreaseTimeout); // Clear any ongoing decrease animation
  decreaseTimeout = setTimeout(() => {

    feverElement.style.transitionDuration = "7.5s"; // Set transition duration to 0 to instantly grow

    decrease_bar(); // Start decrease animation after a delay

  }, 300);
}

function decrease_bar() {

  feverElement.style.height = "0";


};


var endscreen_triggered = false;


function check_barpos() {
    
    if (feverElement.offsetHeight === 0) {

        if (current_amount > 1000000 && endscreen_triggered == false) {

            endscreen_triggered = true;

            setTimeout(function(){var win_screen = document.getElementsByClassName('winstate')[0];
            win_screen.innerHTML = "FEVERMETER destabilized! " + "You accumulated a total score of " + current_amount + " points!";

            update_score();
            winstate();

        }, 400);
    
            }


    } else if (Math.abs(feverElement.offsetHeight - feverElement.parentElement.offsetHeight) < 1) {

        fevercover.style.animation = "fever_cover_effect 1s ease-out";

        if (current_amount > 1000000 && endscreen_triggered == false) {

            endscreen_triggered = true;

            setTimeout(function(){var win_screen = document.getElementsByClassName('winstate')[0];
            win_screen.innerHTML = "FEVERMETER destabilized! " + "You accumulated a total score of " + current_amount + " points!";

            update_score();
            winstate();

        }, 100);

        }

        sound_meter_filled.play();

        setTimeout(function() {

            fevercover.style.animation = "none";

        }, 1000)


        fevertext1.style.animation = "multiplied_text forwards 2s";
        fevertext2.style.animation = "multiplied_text_right forwards 2s 0.5s";

        setTimeout(function() {

            fevertext1.style.animation = "none";
            fevertext2.style.animation = "none";

        }, 2000);
        
        feverElement.style.transitionDuration = "0s";
        feverElement.style.height = "25%";

        current_amount *= 10 * comboValue;



    }
}

setInterval(check_barpos, 250);





function increase_bar_strong() {
  
    feverElement.style.transitionDuration = "2.5s"; // Set transition duration to 0 to instantly grow
  
    feverElement.style.height = "100%";
  
    clearTimeout(decreaseTimeout); // Clear any ongoing decrease animation
    decreaseTimeout = setTimeout(() => {
  
      feverElement.style.transitionDuration = "7.5s"; // Set transition duration to 0 to instantly grow
  
      decrease_bar(); // Start decrease animation after a delay
  
    }, 450);
  }
  




}



















function failstate(){

r.style.setProperty("--failstate_opacity", "80%");
r.style.setProperty("--failstate_fontsize", "1em");

}



function winstate(){

r.style.setProperty("--winstate_opacity", "80%");

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




const score_feedback = document.getElementById('score_feedback');
const animationBoxTemplate = document.querySelector('.animation-box');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function triggerCustomEffect() {
    const newAnimationBox = animationBoxTemplate.cloneNode(true);

    // Generate random displacement values between -10 and 10 pixels
    const displacementX = getRandomValue(-50, 50);
    const displacementY = getRandomValue(-50, 50);

    newAnimationBox.style.left = mouseX + displacementX + 'px';
    newAnimationBox.style.top = mouseY + displacementY + 'px';

    // Set the text inside the animation box
    const variableText = score_increase;
    newAnimationBox.innerText = variableText;

    score_feedback.appendChild(newAnimationBox);

    // Start the animation by adding the 'animate' class
    newAnimationBox.classList.add('animate');

    // Remove the animation box after the animation is done
    newAnimationBox.addEventListener('animationend', () => {
        score_feedback.removeChild(newAnimationBox);
    });
}

// Function to generate a random value between min and max
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}


