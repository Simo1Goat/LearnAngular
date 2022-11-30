import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((Tasks) => this.tasks = Tasks)
  }
  deleteTask(task: Task) {
    this.taskservice.deleteTask(task).subscribe(() =>
      (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }
  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskservice.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    this.taskservice.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
