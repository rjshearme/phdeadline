let end_time = new Date(2021, 9, 30, 23, 59, 59);

function zeroPad(number) {
    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}


function updateTimer() {
    const new_time = new Date();
    const current_month = (new_time.getMonth() + 1) % 12
    new_time.setMonth(current_month);
    let time_remaining = end_time - new_time;
    let seconds = Math.floor(time_remaining / 1000);
    let milli_secs_remaining = time_remaining - (seconds * 1000);
    let days_remaining = Math.floor((seconds % 31536000) / 86400);
    let hours_remaining = Math.floor(((seconds % 31536000) % 86400) / 3600);
    let mins_remaining = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    let seconds_remaining = Math.floor(((seconds % 31536000) % 86400) % 3600) % 60;
    $('#timer').text(days_remaining + ' days ' + zeroPad(hours_remaining) + ':' + zeroPad(mins_remaining) + ':' + zeroPad(seconds_remaining) + '.' + milli_secs_remaining)
}

updateTimer()

setInterval(updateTimer, 1);

