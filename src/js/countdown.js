// events first day
let countdownTime = new Date("2025-05-06T10:00:00").getTime();
let currentTime = new Date().getTime();
// let currentTime = new Date("2025-05-15T14:44:55").getTime();
let timeRemaining = countdownTime - currentTime;
// let currenTimeCounter = setInterval(() => {
//     currentTime += 1000;
// }, 1000)

if (timeRemaining > 0) {
    countdownTimer(countdownTime, "06.05.2025", "10.00", "Etkinliğe Kalan", false);
} else {
    showEventStatusContainer();
    updateEventStatus();
}

function countdownTimer(countdownTime, date, time, title, hideDay) {
    hideEventStatusContainer();
    let eventCountdownDate = document.getElementById("eventCountdownDate");
    let eventCountdownTitle = document.getElementById("eventCountdownTitle");
    let eventCountdownTimer = document.getElementById("eventCountdownTimer");
    let eventCountdownDateText = document.getElementById("eventCountdownDateText");
    let eventCountdownTimeText = document.getElementById("eventCountdownTimeText");

    eventCountdownTitle.innerText = title;
    eventCountdownDateText.innerText = date;
    eventCountdownTimeText.innerText = time;

    if (hideDay) {
        document.getElementById("countdownDay").classList.add("hidden");
        document.getElementById("countdownDayColon").classList.add("hidden");
    }

    eventCountdownDate.classList.remove("hidden");
    eventCountdownDate.classList.add("flex");
    eventCountdownTitle.classList.remove("hidden");
    eventCountdownTimer.classList.remove("hidden");
    eventCountdownTimer.classList.add("flex");
    let x = setInterval(() => {
        let currentTime = new Date().getTime();
        let timeRemaining = countdownTime - currentTime;
        if (timeRemaining < 0) {
            clearInterval(x);
            document.getElementById("eventCountdownDate").classList.add("hidden");
            document.getElementById("eventCountdownTitle").classList.add("hidden");
            document.getElementById("eventCountdownTimer").classList.add("hidden");

            showEventStatusContainer();
            updateEventStatus();
        } else {
            let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById("eventCountdownDay").innerHTML = days.toString().padStart(2, 0);
            document.getElementById("eventCountdownHour").innerHTML = hours.toString().padStart(2, 0);
            document.getElementById("eventCountdownMinute").innerHTML = minutes.toString().padStart(2, 0);
            document.getElementById("eventCountdownSecond").innerHTML = seconds.toString().padStart(2, 0);
        }
    }, 1000);
}

function updateEventStatus() {
    const currentDate = new Date();
    const eventEndedContainer = document.getElementById("eventEndedContainer");
    const eventEndedTitle = eventEndedContainer.querySelector("h1");
    
    // 6 Mayıs - 1. Gün
    if (currentDate.getDate() === 6 && currentDate.getMonth() === 4) {
        eventEndedTitle.innerText = "Bilişim ve İnovasyon Zirvesi 1. Gün Sona Erdi";
    }
    // 7 Mayıs - 2. Gün
    else if (currentDate.getDate() === 7 && currentDate.getMonth() === 4) {
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        const currentTime = currentHour * 60 + currentMinute;
        
        // 10:15'ten önce
        if (currentTime < 10 * 60 + 15) {
            eventEndedTitle.innerText = "Bilişim ve İnovasyon Zirvesi 1. Gün Sona Erdi";
        }
        // 10:15 ile 15:30 arası
        else if (currentTime >= 10 * 60 + 15 && currentTime < 15 * 60 + 30) {
            eventEndedTitle.innerText = "Bilişim ve İnovasyon Zirvesi 2. Gün Devam Ediyor";
        }
        // 15:30'dan sonra
        else {
            eventEndedTitle.innerText = "Bilişim ve İnovasyon Zirvesi 2. Gün Sona Erdi";
        }
    }
    // 8 Mayıs - 3. Gün
    else if (currentDate.getDate() === 8 && currentDate.getMonth() === 4) {
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        const currentTime = currentHour * 60 + currentMinute;
        
        // 10:00'dan önce
        if (currentTime < 10 * 60) {
            eventEndedTitle.innerText = "Bilişim ve İnovasyon Zirvesi 2. Gün Sona Erdi";
        }
        // 10:00 ile 15:00 arası
        else if (currentTime >= 10 * 60 && currentTime < 15 * 60) {
            eventEndedTitle.innerText = "Bilişim ve İnovasyon Zirvesi 3. Gün Devam Ediyor";
        }
        // 15:00'dan sonra
        else {
            eventEndedTitle.innerText = "Bilişim ve İnovasyon Zirvesi 3. Gün Sona Erdi";
        }
    }
    // 9 Mayıs ve sonrası
    else if (currentDate.getDate() >= 9 && currentDate.getMonth() === 4) {
        eventEndedTitle.innerText = "VI. Bilişim ve İnovasyon Zirvesi Sona Erdi";
    }
    
    hideEventStatusContainer();
    activateEventEndedContainer();
}

function showEventStatusContainer() {
    document.getElementById("eventStatusContainer").classList.remove("hidden");
}

function hideEventStatusContainer() {
    document.getElementById("eventStatusContainer").classList.add("hidden");
}

function activateEventEndedContainer() {
    let eventEndedContainer = document.getElementById("eventEndedContainer");
    eventEndedContainer.classList.remove("hidden");
    eventEndedContainer.classList.add("flex");
}