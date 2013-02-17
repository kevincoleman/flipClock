$(document).ready(function(){

    setInterval(function() {

        // Set Global Variables
        var time = new Date();
        var advancedTime = new Date();
            advancedTime.setSeconds(time.getSeconds() + 1);
        var clock = new Object();
        var advancedClock = new Object();




        // Set clocks' digits
        var setClockDigits = function(clockToSet, timeToUse) {


            // Set first digit
            clockToSet.firstDigit = "";

            // Checks to decide "1" or "0" in 12-hour format 
            if ((timeToUse.getHours() > 9 && timeToUse.getHours() < 13)
             || (timeToUse.getHours() > 21 && timeToUse.getHours() < 24)
             || (timeToUse.getHours() == 0)) {
                clockToSet.firstDigit = 1;
            }


            // Set second digit
            clockToSet.secondDigit = timeToUse.getHours();
            
            if (clockToSet.secondDigit > 12) {
                // to set to 12-hour format
                clockToSet.secondDigit -= 12;
            }

            if (clockToSet.secondDigit > 9) {
                // to handle tens-wrapping
                clockToSet.secondDigit -= 10;
            }

            if (clockToSet.secondDigit == 0) {
                // to handle 12AM
                clockToSet.secondDigit = 2;
            }


            // Set third digit
            clockToSet.thirdDigit = timeToUse.getMinutes();
            if (clockToSet.thirdDigit < 10) {
                clockToSet.thirdDigit = 0;
            } else {
                clockToSet.thirdDigit = (clockToSet.thirdDigit + "")[0];
            }


            // Set fourth digit
            clockToSet.fourthDigit = timeToUse.getMinutes();
            if (clockToSet.fourthDigit > 9) {
                clockToSet.fourthDigit = (clockToSet.fourthDigit + "")[1];
            }
        }

        setClockDigits(clock, time);
        setClockDigits(advancedClock, advancedTime)


        if (clock.firstDigit == "") {
            $('#content').css('width', '2.4em');
        } else {
            $('#content').css('width', '3.1em')
        }

        // Animation
        for (changeDigit in clock) {

            // Update the digits as necessary
            $('.' + changeDigit).html(clock[changeDigit]);

            // Play animation to change digits
            if (advancedClock[changeDigit] !== clock[changeDigit]) {
                
                // update the underlying digit to the new value
                $('div.top div.' + changeDigit).html(advancedClock[changeDigit]);
                
                // create the animating div for the top flap
                $('div.top div.' + changeDigit).append('<div class="flipperTop">' + clock[changeDigit] + '</div>');
                
                // create the animating div for the bottom flap
                $('div.bottom div.' + changeDigit).append('<div class="flipperBottom">' + advancedClock[changeDigit] + '</div>');
            }
        }




    }, 1000);

});