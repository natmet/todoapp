import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

const firsTask = {
  id: 1,
  title: 'Wash The Dishes',
  date: '2023-10-20T18:16:00',
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([firsTask]);

  constructor() {}

  getTask() {
    return this.tasks;
  }

  public saveTask(task: Task) {
    this.tasks.next([task]);
  }

  public removeTask(taskId: number) {
    const tasks = this.tasks.value;
    console.log(tasks);
    
  }

  public editTask(task: Task) {}
}
