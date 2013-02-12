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
        var thirdDigit = Math.floor(time.getMinutes() / 10);
        $('.minuteTens').text(thirdDigit);        


        // Set & display fourth digit
        var fourthDigit = time.getMinutes();
        if (time.getMinutes > 9) {
            fourthDigit = (time.getMinutes() + "")[0];
        }
        $('.minuteOnes').text(time.getMinutes());

    }, 500);

});