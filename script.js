var countDownDate = new Date("Nov 21, 2024 00:00:00").getTime();

function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

var timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = formatNumber(days);
    document.getElementById("hours").innerHTML = formatNumber(hours);
    document.getElementById("minutes").innerHTML = formatNumber(minutes);
    document.getElementById("seconds").innerHTML = formatNumber(seconds);

    if(distance < 0)
    {
        clearInterval(timer);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000);
