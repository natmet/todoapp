import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../core/services/task.service';
import { Task } from '../core/models/task.model';
import { ModalController } from '@ionic/angular';
import { TaskFormComponent } from '../features/task-form/task-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public tasks: Task[] = [];
  public isModalOpen = false;
  public taskToEdit!: Task;

  constructor(
    private taskService: TaskService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService._task;
  }

  public addTask() {
    this.taskToEdit = {} as Task;
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
  }

  ngOnDestroy(): void {}
}
