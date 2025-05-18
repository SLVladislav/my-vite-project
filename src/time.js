import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    selector: document.querySelector("#datetime-picker"),
    btnStart: document.querySelector("button[data-start]"),
    timerDays: document.querySelector("span[data-days]"),
    timerHours: document.querySelector("span[data-hours]"),
    timerMinutes: document.querySelector("span[data-minutes]"),
    timerSeconds: document.querySelector("span[data-seconds]")
}

refs.btnStart.addEventListener("click", () => {
    timer.start();
    refs.selector.disabled = false;

  
});

let userSelectedDate = 0;
// refs.btnStart.disabled = false;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < Date.now()) {             
            alert("Please choose a date in the future"); 
        
        } else {
            refs.btnStart.disabled = false;
            userSelectedDate = selectedDates[0].getDate();
        }    
                
        console.log(userSelectedDate);
    },   
};
// console.log(options);


const fp = flatpickr(refs.selector, options);

class Timer {
    constructor({onTick}) {
        this.intervalId = null,
        this.isActive = false,
        this.onTick = onTick
    }
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = convertMs(deltaTime);
            this.onTick(time);
        
            if (deltaTime <= 1000) {
                this.stop();
            }

            
        }, 1000)
    }
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }
}

const timer = new Timer({
    onTick: updateTimer,
});

function updateTimer({ days, hours, minutes, seconds }) {
    refs.timerDays.textContent = `${days}`;
    refs.timerHours.textContent = `${hours}`;
    refs.timerMinutes.textContent = `${minutes}`;
    refs.timerSeconds.textContent = `${seconds}`;
}

const addLeadingZero = (value) => {
    return  String(value).padStart(2, "0");
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  