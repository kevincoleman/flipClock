$(document).ready(function(){

    setInterval(function() {

        var time = new Date;

            // Set first digit
            var firstDigit = 0;
            if ((time.getHours() > 9 && time.getHours() < 13) || (time.getHours() > 21 && time.getHours() < 24)) {
                firstDigit = 1;
            }

            // Set second digit
            var secondDigit = time.getHours();
            if (secondDigit > 12) {
                secondDigit -= 12;
            }
            if (secondDigit > 9) {
                secondDigit -= 10;
            }

            // Set third digit
            var thirdDigit = time.getMinutes();
            if (thirdDigit < 10) {
                thirdDigit = 0;
            } else {
                thirdDigit = (thirdDigit + "")[0];
            }

            // Set fourth digit
            var fourthDigit = time.getMinutes();
            if (fourthDigit > 9) {
                fourthDigit = (fourthDigit + "")[1];
            }

        // Animate changing tiles
        //if ((time.getSeconds() - 1) == 58) {

        //    $('div.digit').html('<div class="flipper">0</div>');
        //} else {

            $('.hourTens').text(firstDigit);
            $('.hourOnes').text(secondDigit);
            $('.minuteTens').text(thirdDigit);        
            $('.minuteOnes').text(fourthDigit);

        //}

    }, 500);

});