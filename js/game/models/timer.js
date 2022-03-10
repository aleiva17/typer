// Timer para jugar durante 1 minuto
export default class Timer {
    constructor(finishTime) {
        this.timer = null;
        this.active = true;

        this.actualTime = 0;
        this.finishTime = finishTime;
    }

    startTimer() {
        this.timer = setInterval(() => {
            ++this.actualTime;
            if (this.actualTime == this.finishTime) {
                this.finishTimer();
            }
        }, 1000);
    }

    finishTimer() {
        this.active = false;
        clearInterval(this.timer);
    }

    setActualTime(seconds) {
        this.actualTime = seconds;
    }

    getActualTime() {
        return this.actualTime;
    }

    getActive() {
        return this.active;
    }
}