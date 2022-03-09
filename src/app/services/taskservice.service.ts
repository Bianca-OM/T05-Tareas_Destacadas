import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  private tasks: string[] = [];
  private completedTasks: string[] = [];
  private importantTasks: string[] = [];

  constructor() { 
    this.tasks.push("Tarea 1","Tarea 3");
    this.completedTasks.push("Tarea 2","Tarea 4");
  }
  public addTask(task: string){
    this.tasks.push(task);
  }
  public removeTask(pos: number){
    this.tasks.splice(pos, 1);
  }
  public getTasks(){
    return this.tasks;
  }

  public completedTask(pos: number){
    this.completedTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }
  public getCompletedTask(){
    return this.completedTasks;
  }
  public removeCompletedTask(pos: number){
    this.completedTasks.splice(pos, 1);
  }

  public unCompletedTask(pos: number){
    this.tasks.push(this.completedTasks[pos]);
    this.removeCompletedTask(pos);
  }
}