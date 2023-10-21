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
    this.taskService.getTask().subscribe((task) => {
      this.tasks = this.tasks.concat(...task);
    });
  }

  ngOnDestroy(): void {}

  public openModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  public editTask(id: number) {}

  public deleteTask(id: number) {
    this.taskService.removeTask(id);
    
  }
}
