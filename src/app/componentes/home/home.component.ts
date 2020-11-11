import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tasksSer: TasksService) {

  }

  ngOnInit() {
  }
  deleteTask(i) {
    this.tasksSer.deleteTask(i);
  }


}
