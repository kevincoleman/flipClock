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
        var secondDigit = 0;
        if (time.getHours() > 12) {
            secondDigit = time.getHours() - 12;
        }
        else if (time.getHours() > 9 && time.getHours() < 13) {
            secondDigit = time.getHours() - 10;
        } else {
            secondDigit = time.getHours();
        }
        $('.hourOnes').text(secondDigit);


        // Set & display third digit
        var thirdDigit = Math.floor(time.getMinutes() / 10);
        $('.minuteTens').text(thirdDigit);        


        // Set & display fourth digit
        var fourthDigit = (time.getMinutes() + "").charAt(0);
        $('.minuteOnes').text(fourthDigit);

    }, 500);

});