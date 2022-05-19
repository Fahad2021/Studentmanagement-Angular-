import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { BatchComponent } from './batch/batch.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'batch',component:BatchComponent},
  {path:'regestration',component:RegestrationComponent},
  {path:'user',component:UserComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
