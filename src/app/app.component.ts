import { Component } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-root',
  imports: [TaskItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';

  addTask(task: string) {

  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }
}
