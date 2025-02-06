import { Component, OnInit } from '@angular/core';
import { WorkoutService } from './services/workout.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterModule, NavbarComponent, UserFormComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // username: string = '';
  // selectedactivity: string = '';
  // minute: number = 0;
  // searchText: string = ''; // Bind to search input
  // workoutCount: number = 0;
  // paginatedItems: any[] = [];
  // currentPage: number = 1;
  // itemsPerPage: number = 5;
  // totalPages: number = 1;
  // todoitemarray: { id: string, username: string; selectedactivity: string; minute: number; workoutCount: number }[] = [];

  // constructor(private workoutService: WorkoutService) {}

  // ngOnInit(): void {
  //   const localdata = localStorage.getItem("setitem");
  //   if (localdata != null) {
  //     this.todoitemarray = JSON.parse(localdata);
  //   }
  //   this.updatePagination();
  // }

  // onsave() {
  //   const now = new Date();
  //   const timeString = now.toLocaleTimeString('en-US', { hour12: false });

  //   let existingUser = this.todoitemarray.find(item => item.username === this.username);

  //   if (existingUser) {
  //     existingUser.selectedactivity += `, ${this.selectedactivity}`;
  //     existingUser.minute += this.minute;
  //     existingUser.workoutCount += 1;
  //   } else {
  //     const newitem = {
  //       id: timeString,
  //       username: this.username,
  //       selectedactivity: this.selectedactivity,
  //       minute: this.minute,
  //       workoutCount: 1
  //     };
  //     this.todoitemarray.push(newitem);
  //   }

  //   localStorage.setItem("setitem", JSON.stringify(this.todoitemarray));

  //   this.username = "";
  //   this.selectedactivity = "";
  //   this.minute = 0;
  //   this.updatePagination();
  // }

  // updatePagination() {
  //   this.totalPages = Math.ceil(this.todoitemarray.length / this.itemsPerPage);
  //   this.paginatedItems = this.todoitemarray.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  // }

  // nextPage() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.updatePagination();
  //   }
  // }

  // previousPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.updatePagination();
  //   }
  // }

  // get filteredPaginatedItems() {
  //   return this.paginatedItems.filter(item => item.username.toLowerCase().includes(this.searchText.toLowerCase()));
  // }
}

