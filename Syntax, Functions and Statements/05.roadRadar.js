function radar(speed, area) {
    switch (area) {
        case 'motorway':
            output(130);
            break;
        case 'interstate':
            output(90);
            break;
        case 'city':
            output(50);
            break;
        case 'residential':
            output(20);
            break;

            function output(speedLim) {
                let difference = speed - speedLim;

                if (speed > speedLim) {
                    if (difference <= 20) {
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLim} - speeding`);
                    } else if (difference <= 40) {
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLim} - excessive speeding`);
                    } else if (difference > 40) {
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLim} - reckless driving`);
                    }
                } else {
                    console.log(`Driving ${speed} km/h in a ${speedLim} zone`);
                }
            }
    }
}

radar(200, 'motorway');