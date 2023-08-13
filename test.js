$(function() {
    let current_amount = 0;
    let intervalId;
    let isHovering = false;
    let debounceInterval = 100; // Debounce interval time in milliseconds

    var div = $('.btns_container');
    var width = div.width() * (100 / 100);
    div.css('height', width);

    setInterval(oneSecondFunction, 200);

    function oneSecondFunction() {
        var div = $('.btns_container');
        var width = div.width() * (50 / 100);
        div.css('height', width);
    }

    // Track mouse movement over btn_2 to reset inactivityTime and trigger hover behavior
    $(".btn_2").mousemove(function() {
        if (!isHovering) {
            isHovering = true;
            intervalId = setInterval(function() {
                current_amount += 3 * comboValue;
                update_score();
                if (hoverTime < 5) {
                    hoverTime++;
                    console.log("Hover time increased:", hoverTime);
                    handleHover(true);
                }
            }, debounceInterval); // Debounce the interval start
        }
        resetInactivity();
    });

    $(".btn_2").mouseout(function() {
        console.log("Mouse left btn_2");
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        isHovering = false;
        hoverTime = 0;
        handleHover(false);
        update_combo();

    },
    function() {
        console.log("Hover ended");
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        isHovering = false;
        hoverTime = 0; // Reset hoverTime when hover ends
        resetInactivity();
    
    });

    // ...

   // Function to handle button hover
   function handleHover(isHoverStart) {
        if (isHoverStart) {
            console.log("handleHover() called!");
            hoverTime = Math.min(5, hoverTime + 1); // Increase hover time, max value is 5
            console.log("Hover time increased:", hoverTime);
        } else {
            hoverTime = 0; // Reset hover time
            console.log("Hover time reset");
        }
        resetInactivity(); // Reset inactivity when hovering changes
    }
    
    // Click events for buttons 1, 3, and 4
    $(".btn_1, .btn_3, .btn_4").click(function() {
        resetInactivity()
        current_amount += parseInt($(this).text().replace("+", ""));
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

    let comboValue = 0;
    let hoverTime = 0;
    let clickCount = 0;
    let inactivityTime = 0;

    // Interval to check and update the combo
    setInterval(() => {
        console.log("hoverTime:", hoverTime);
        console.log("clickCount:", clickCount);
        console.log("inactivityTime:", inactivityTime);
    
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
            hoverTime = 0; // Reset hoverTime after increasing combo
        }
    
        if (inactivityTime >= 1 && comboValue > 0) {
            comboValue = 0; // Reset comboValue if no interaction for 1 second
            console.log("Combo reset!");
            inactivityTime = 0; // Reset inactivityTime
        } else if (hoverTime === 0 && clickCount === 0) {
            inactivityTime++;
        }
    
        update_combo(); // Update combo display value
    
    }, 1000);

    // Function to handle button click
    function handleClick() {
        console.log("handleClick() called!");
        clickCount++;
        inactivityTime = 0; // Reset inactivityTime when interaction occurs
    }

    // Function to update combo display
    function update_combo() {
        var comboDisplay = document.getElementsByClassName('combo_display')[0];
        comboDisplay.innerHTML = comboValue;
    }

function resetInactivity() {
    inactivityTime = 0; // Reset inactivityTime when interaction occurs
}
});

