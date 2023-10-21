import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

const initialValue = {
  id: 1,
  title: 'Wash The Dishes',
  date: '2023-10-20T18:16:00',
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  get _task() {
    console.log("getter called");
    return this.tasks;
  }

  constructor() {}

  public deleteTask(id: number){
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public editTask(task: Task) {}
}
