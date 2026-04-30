let interval;   // store interval ID

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").textContent = time;
}

function startClock() {
    if (!interval) {  // prevent multiple intervals
        interval = setInterval(updateClock, 1000);
    }
}

function stopClock() {
    clearInterval(interval);
    interval = null;
}