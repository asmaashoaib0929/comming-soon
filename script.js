
function countdown() {
    const targetDate = new Date("2025-03-25T00:00:00").getTime(); // Set your target date
            
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        
        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Event Started!";
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerHTML =
         `   <div class="d-flex justify-content-center align-items-center flex-column">
                    <h3 class="time-count">${days}</h3>
                    <span class="time-description">Days</span>
                </div>:
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <h3 class="time-count">${hours}</h3>
                    <span class="time-description">Hours</span>
                </div>:
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <h3 class="time-count">${minutes}</h3>
                    <span class="time-description">Min</span>
                </div>:
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <h3 class="time-count">${seconds}</h3>
                    <span class="time-description">Sec</span>
                </div>`;
    }
    setInterval(updateCountdown, 1000);
}
window.onload = countdown;