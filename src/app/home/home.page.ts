import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../core/services/task.service';
import { Task } from '../core/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public tasks: Task[] = [];
  public isModalOpen = false;
  public taskToEdit!: Task | undefined;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService._task;
  }

  public addTask() {
    this.taskToEdit = undefined;
    this.setModal();
  }

  public setModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  public editTask(id: number) {
    const selectedTask = this.tasks.find((task) => task.id === id);
    this.taskToEdit = selectedTask as Task;
    this.setModal();
  }

  public deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService._task;
  }

  onTaskSave(task: any) {
    this.taskService.addTask(task as Task);
    this.setModal();
    this.tasks = this.taskService._task;
  }

  ngOnDestroy(): void {}
}
