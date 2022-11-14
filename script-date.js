let date = new Date();
// gives name of current week day
function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}
//gives name of current month
function getMonth(date) {
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return month[date.getMonth()];
}

let fullDate = `${getWeekDay(date)}, ${date.getFullYear()} ${date.getDate()} ${getMonth(date)}`
document.getElementById("dateCheck").textContent = fullDate;
// gives daytime (am/pm)
function getDayTime(date){
    if (0 <= date.getHours() && date.getHours() <= 11){
        return "am"
    }
    else if (12 <= date.getHours() && date.getHours() <= 23){
        return "pm"
    }
}
// these 3 adds 0 to time values
function getHoursZero(date){
    if (date.getHours() < 10){
        return `0${date.getHours()}`
    }
    else{
        return `${date.getHours()}`
    }
}

function getMinutesZero(date){
    if (date.getMinutes() < 10){
        return `0${date.getMinutes()}`
    }
    else{
        return `${date.getMinutes()}`
    }
}

function getSecondsZero(date){
    if (date.getSeconds() < 10){
        return `0${date.getSeconds()}`
    }
    else{
        return `${date.getSeconds()}`
    }
}
// displays time
let fullTime = `${getHoursZero(date)}-${getMinutesZero(date)}-${getSecondsZero(date)} ${getDayTime(date)}`
document.getElementById("timeCheck").textContent = fullTime

semEndDate = new Date(2022, 11, 04)
// subtracts current date from semester end
function dateDiff(date, semEndDate){
    return (semEndDate - date) / (1000 * 60 * 60 * 24)
}

document.getElementById("semEnd").textContent = `Semestr ends in: ${Math.trunc(dateDiff(date, semEndDate))} days`