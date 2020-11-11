import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './componentes/add-task/add-task.component';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { TaskComponent } from './componentes/task/task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'add-task', pathMatch: 'full', component: AddTaskComponent },
  { path: 'task/:id', pathMatch: 'full', component: TaskComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
