function initializeClock(id, endtime) {
    var clock = document.getElementById('clock');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var millisecondsSpan = clock.querySelector('.milliseconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        millisecondsSpan.innerHTML = ('0' + t.milliseconds).slice(-3);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 80);
}



function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - new Date();
    var milliseconds = t % 1000
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'milliseconds': milliseconds
    };
}
$(document).ready(function () {

    date = '';
    if (date != '') {
        var deadline = new Date(Date.parse(new Date(date)));
        initializeClock('clock', deadline);
    }
    else{
        $('#clock').append('CTF coming soon')
    }



});