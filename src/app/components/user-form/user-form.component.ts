import { Component } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  username: string = "";
  selectedactivity: string = "";
  minute: number = 0;

  constructor(private workoutService: WorkoutService) {}

  onSave() {
    if (this.username && this.selectedactivity && this.minute > 0) {
      this.workoutService.saveWorkout(this.username, this.selectedactivity, this.minute);
      this.username = "";
      this.selectedactivity = "";
      this.minute = 0;
    }
  }
}
