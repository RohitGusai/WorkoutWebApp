import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workouts: any[] = [];

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localData = localStorage.getItem('setitem');
      if (localData) {
        this.workouts = JSON.parse(localData);
      }
    }
  }

  getWorkouts() {
    return this.workouts;
  }

  saveWorkout(username: string, selectedactivity: string, minute: number) {
    const now = new Date();
    const id = now.toLocaleTimeString('en-US', { hour12: false });

    let existingUser = this.workouts.find(item => item.username === username);
    if (existingUser) {
      existingUser.selectedactivity += `, ${selectedactivity}`;
      existingUser.minute += minute;
      existingUser.workoutCount += 1;
    } else {
      this.workouts.push({ id, username, selectedactivity, minute, workoutCount: 1 });
    }

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('setitem', JSON.stringify(this.workouts));
    }
  }
}
