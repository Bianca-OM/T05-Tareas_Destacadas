import { Component } from '@angular/core';
import { TaskserviceService } from "../services/taskservice.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public markedTasks: string[];

  constructor(private taskService:TaskserviceService) {
    this.markedTasks = this.taskService.getMarkedTask();
  }

  public removeMarkedTask(pos: number){
    this.taskService.removeMarkedTask(pos);
    this.markedTasks = this.taskService.getMarkedTask();
  }

  public unmarkTask(pos: number){
    this.taskService.unmarkTask(pos);
    this.markedTasks = this.taskService.getMarkedTask();
  }

  public compTask(pos: number){
    this.taskService.completeMarkedTask(pos);
    this.markedTasks = this.taskService.getMarkedTask();
  }

}