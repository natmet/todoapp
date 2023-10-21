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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService._task;
  }

  public setModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  public editTask(id: number) {}

  public deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  onTaskSave(task: any) {
    this.taskService.addTask(task as Task);
    this.setModal();
  }

  ngOnDestroy(): void {}
}
