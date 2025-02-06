import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  workouts: any[] = [];
  paginatedItems: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;
  searchtext: string = '';
  selectedWorkoutType: string = ''; 

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.workouts.length / this.itemsPerPage);
    this.paginatedItems = this.workouts.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }


  get filteredPaginatedItems() {
    return this.paginatedItems.filter(item => {
      const usernameMatch = item.username.toLowerCase().includes(this.searchtext.toLowerCase());
      const workoutTypeMatch = this.selectedWorkoutType ? item.selectedactivity === this.selectedWorkoutType : true;
      return usernameMatch && workoutTypeMatch;
    });
  }


  get workoutTypes(): string[] {
    return [...new Set(this.workouts.map(item => item.selectedactivity))];
  }
}
