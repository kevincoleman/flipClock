$(document).ready(function(){

    setInterval(function() {
    

        var time = new Date;


        // Set & display first digit
        var firstDigit = 0;
        if ((time.getHours() > 9 && time.getHours() < 13) || (time.getHours() > 21 && time.getHours() < 24)) {
            firstDigit = 1;
        }
        $('.hourTens').text(firstDigit);
    

        // Set & display second digit
        var secondDigit = time.getHours();
        if (secondDigit > 12) {
            secondDigit -= 12;
        }
        if (secondDigit > 9) {
            secondDigit -= 10;
        }
        $('.hourOnes').text(secondDigit);


        // Set & display third digit
        var thirdDigit = time.getMinutes();
        if (thirdDigit < 9) {
            thirdDigit = 0;
        } else {
            thirdDigit = (thirdDigit + "")[0];
        }
        $('.minuteTens').text(thirdDigit);        


        // Set & display fourth digit
        var fourthDigit = time.getMinutes();
        if (fourthDigit > 9) {
            fourthDigit = (fourthDigit + "")[1];
        }
        $('.minuteOnes').text(fourthDigit);

    }, 500);

});