function attachEventsListeners() {

    let [daysBtn, hoursBtn, minutesBtn, secondsBtn] = [document.querySelector("#daysBtn"), document.querySelector("#hoursBtn"), document.querySelector("#minutesBtn"), document.querySelector("#secondsBtn")];
    let [daysInput, hoursInput, minutesInput, secondsInput] = [document.querySelector("#days"), document.querySelector("#hours"), document.querySelector("#minutes"), document.querySelector("#seconds")]

    daysBtn.addEventListener('click', function() {
        hoursInput.value = daysInput.value * 24
        minutesInput.value = daysInput.value * 1440
        secondsInput.value = daysInput.value * 86400
    })
    hoursBtn.addEventListener('click', function() {

        daysInput.value = hoursInput.value / 24
        minutesInput.value = hoursInput.value * (1440 / 24)
        secondsInput.value = hoursInput.value * 86400 / 24
    })
    minutesBtn.addEventListener('click', function() {
        daysInput.value = minutesInput.value / 1440
        hoursInput.value = minutesInput.value / 60
        secondsInput.value = minutesInput.value * 60
    })
    secondsBtn.addEventListener('click', function() {
        daysInput.value = secondsInput.value / 86400;
        hoursInput.value = secondsInput.value / 1440
        minutesInput.value = secondsInput.value / 60;
    })
}