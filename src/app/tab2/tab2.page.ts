import { Component } from '@angular/core';
import { TaskserviceService } from "../services/taskservice.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public comTasks: string[];

  constructor(private taskService:TaskserviceService) {
    this.comTasks = this.taskService.getCompletedTask();
  }

  public removeComTask(pos: number){
    this.taskService.removeCompletedTask(pos);
    this.comTasks = this.taskService.getCompletedTask();
  }

  public uncompleteTask(pos: number){
    this.taskService.unCompletedTask(pos);
    this.comTasks = this.taskService.getCompletedTask();
  }

}