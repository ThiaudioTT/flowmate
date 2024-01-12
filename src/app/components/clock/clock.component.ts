import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  timerDisplay = '00:00';
  seconds = 0;


  /**
   * Start the timer
   */
  startTimer() {
    setInterval(() => {
      this.seconds++;
      this.timerDisplay = this.formatTime(this.seconds);
    }, 1000);
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


  /**
   * Helper function to check if the clock is running
   * @returns boolean
   */
  isClockRunning() {
    return this.seconds > 0;
  }
}
