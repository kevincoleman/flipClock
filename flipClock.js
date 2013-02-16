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


        $('.firstDigit').text(clock.firstDigit);
        $('.secondDigit').text(clock.secondDigit);
        $('.thirdDigit').text(clock.thirdDigit);        
        $('.fourthDigit').text(clock.fourthDigit);


        // Animate changing tiles
        for (changeDigit in clock) {
            if (advancedClock[changeDigit] !== clock[changeDigit]) {
                $('div.top div.' + changeDigit).html(advancedClock[changeDigit]);
                $('div.top div.' + changeDigit).append('<div class="flipperTop">' + clock[changeDigit] + '</div>');
                $('div.bottom div.' + changeDigit).append('<div class="flipperBottom">' + advancedClock[changeDigit] + '</div>');
            }
        }

    }, 1000);

});