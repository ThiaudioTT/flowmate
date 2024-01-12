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
  intervalId: any;


  /**
   * Start the timer
   */
  startTimer() {
    this.intervalId = setInterval(() => {
      this.seconds++;
      this.timerDisplay = this.formatTime(this.seconds);
    }, 1000);

    this.isClockRunning = true;
  }

  stopTimer(): void {
    clearInterval(this.intervalId);
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

}
