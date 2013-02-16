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
            clockToSet.firstDigit = 0;
            if ((timeToUse.getHours() > 9 && timeToUse.getHours() < 13) || (timeToUse.getHours() > 21 && timeToUse.getHours() < 24)) {
                clockToSet.firstDigit = 1;
            }

            // Set second digit
            clockToSet.secondDigit = timeToUse.getHours();
            if (clockToSet.secondDigit > 12) {
                clockToSet.secondDigit -= 12;
            }
            if (clockToSet.secondDigit > 9) {
                clockToSet.secondDigit -= 10;
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



        // Animate changing tiles
        // Update this if statement to one that compares clock.digits to advancedClock.digits
        if ((time.getSeconds() % 2) == 0) {

                //start timer at 0
                $('div.top div.digit').html('<div class="placeholder">4</div><div class="flipperTop">' + '5' + '</div>');
                //timer reaches 500, hide flippertop, show flipperbottom
                $('div.bottom div.digit').html('<div class="placeholder">4</div><div class="flipperBottom">' + '5' + '</div>');
                //timer reaches 1000, hide flippers

        } else {

            $('.hourTens').text(clock.firstDigit);
            $('.hourOnes').text(clock.secondDigit);
            $('.minuteTens').text(clock.thirdDigit);        
            $('.minuteOnes').text(clock.fourthDigit);

        }

    }, 1000);

});