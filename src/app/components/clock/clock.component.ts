import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  timerDisplay = '00:00';
  seconds = 0;
  isClockRunning = false;
  timerId: any;
  restTimeId: any;


  /**
   * Start the timer
   */
  startTimer() {
    this.timerId = setInterval(() => {
      this.seconds++;
      this.timerDisplay = this.formatTime(this.seconds);
    }, 1000);

    this.isClockRunning = true;
  }

  stopTimer(): void {
    clearInterval(this.timerId);
    this.isClockRunning = false;
  }


  /**
   * Format the time
   * @param seconds
   */
  formatTime(seconds: number): string {

    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;


    let formatString = (time: number) => {
      return time < 10 ? `0${time}` : time;
    }

    return `${formatString(minutes)}:${formatString(sec)}`;
  }


  calcRestTime(): string {
    const restTime = this.seconds / 3;
    return this.formatTime(restTime);
  }

  // Start the rest time, auto stop when the rest time is over
  startRest(): void {
    this.stopTimer();

    this.restTimeId = setInterval(() => {
      this.seconds--;
      this.timerDisplay = this.formatTime(this.seconds);

      if(this.seconds === 0) clearInterval(this.restTimeId);
    }, 1000);
  }

}
