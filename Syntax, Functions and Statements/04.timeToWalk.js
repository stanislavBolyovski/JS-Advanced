function walk(steps, stepInMet, speedKm) {
    let dist = steps * stepInMet;
    let time = Math.round(dist / speedKm * 3.6);
    time += Math.floor(dist / 500) * 60;

    let seconds = time % 60;
    time -= seconds;
    let minutes = (time / 60) % 60;
    time -= minutes;
    let hours = Math.floor(time / 3600);


    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    function pad(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }


}

walk(2564, 0.70, 5.5);