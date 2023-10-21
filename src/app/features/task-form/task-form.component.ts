import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  public taskForm!: FormGroup;
  @Input() selectedTask!: Task;
  @Output() taskEventEmitter = new EventEmitter();
  @Output() closeModalEmitter = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskForm = this.setupTaskForm();
    console.log("ON INIT", this.selectedTask)
    this.taskForm.patchValue(this.selectedTask);
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
  }

  closeModal() {
    this.closeModalEmitter.emit();
  }

  emitTask() {
    this.taskEventEmitter.emit(this.taskForm.value);
  }
}
