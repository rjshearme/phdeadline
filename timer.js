let end_time = new Date(2020, 9, 30, 23, 59, 59);
        function updateTimer() {
            let new_time = new Date().setMonth(12); //TODO: find out why this is giving the incorrect month.
            let time_remaining = end_time - new_time;
            let seconds = Math.floor(time_remaining / 1000);
            let milli_secs_remaining = time_remaining - (seconds * 1000);
            let days_remaining = Math.floor((seconds % 31536000) / 86400);
            let hours_remaining = Math.floor(((seconds % 31536000) % 86400) / 3600);
            let mins_remaining = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
            let seconds_remaining = Math.floor(((seconds % 31536000) % 86400) % 3600) % 60;
            $('#timer').text(days_remaining + ' days ' + hours_remaining + ':' + mins_remaining + ':' + seconds_remaining + '.' + milli_secs_remaining)
        }
        updateTimer()
        setInterval(updateTimer, 1);