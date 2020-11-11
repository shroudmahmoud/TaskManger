import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskId;
  task;
  constructor(private route: ActivatedRoute,
    private tasksSer: TasksService,
    private router: Router) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id')
    this.task = this.tasksSer.tasks[this.taskId]
    console.log(this.task)
  }
  saveTask() {
    this.tasksSer.editTask(this.taskId, this.task)
    this.router.navigate(['/'])
  }

  deleteTask() {
    this.tasksSer.deleteTask(this.taskId)
    this.router.navigate(['/'])
  }


}
