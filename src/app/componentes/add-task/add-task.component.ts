import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tasksSer: TasksService,
    private router: Router) {

  }

  ngOnInit(): void {
  }
  saveTask(title, des) {
    this.tasksSer.saveTask(title.value, des.value),
      this.router.navigate(['/'])
  }

}
