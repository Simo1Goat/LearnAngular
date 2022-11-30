import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/ITask';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text!:string;
  day!: string;
  reminder: boolean = false;
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter(); 

  onSubmit() {
    if(!this.text){ 
      alert("Please add a description to your task");
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
