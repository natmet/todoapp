import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  public taskForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskForm = this.setupTaskForm();
  }

  private setupTaskForm() {
    return this.formBuilder.group({
      id: [null, Validators.required],
      title: [null, Validators.required],
      date: [null, Validators.required],
    });
  }

  public addNewTask() {
    const newTask = this.taskForm.value;

    this.taskService.saveTask(newTask);
  }

  public editTask() {}
}
