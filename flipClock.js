$(document).ready(function(){

    setInterval(function() {
    

        var time = new Date;


        // Set & display first digit
        var firstDigit = 0;
        if ((time.getHours() > 9 && time.getHours() < 13) || (time.getHours() > 21 && time.getHours() < 24)) {
            firstDigit = 1;
        }
        $('.digit1').text(firstDigit);
    

        // Set & display second digit
        var secondDigit = 0;
        if (time.getHours() > 12) {
            secondDigit = time.getHours() - 12;
        }
        if (secondDigit > 9) {
            secondDigit -= 10;
        }
        $('.digit2').text(secondDigit);


        // Set & display third digit
        var thirdDigit = Math.floor(time.getMinutes() / 10);
        $('.digit3').text(thirdDigit);        


        // Set & display fourth digit
        var fourthDigit = (time.getMinutes() + "").charAt(1);
        $('.digit4').text(fourthDigit);

    }, 500);

});