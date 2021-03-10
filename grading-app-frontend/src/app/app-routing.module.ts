import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component"

import { StudentComponent } from "./student/student.component"
import { TeacherComponent } from "./teacher/teacher.component"

import { StudentResultsComponent } from "./student-results/student-results.component"
import { StudentReviewComponent } from "./student-review/student-review.component"

import { TeacherAssignmentsComponent } from "./teacher-assignments/teacher-assignments.component"
import { AssignmentGradingsComponent } from "./assignment-gradings/assignment-gradings.component"
import { AssignmentStatisticsComponent } from "./assignment-statistics/assignment-statistics.component"

const routes: Routes = [

  //login path
  {
    path: '',
    component: LoginComponent,
  },

  //main student view path
  {
    path: 'student/:sid',
    component: StudentComponent,

    //child paths inside main student view path
    children: [
      {
        path: '',
        component: StudentResultsComponent,
      },
      {
        path: 'assignment/:aid',
        component: StudentReviewComponent,
      },
    ],
  },

  //main teacher view path
  {
    path: 'teacher/:tid',
    component: TeacherComponent,

    //child paths inside main teacher view path
    children: [
      {
        path: '',
        component: TeacherAssignmentsComponent,
      },
      {
        path: 'assignment/:aid/gradings',
        component: AssignmentGradingsComponent,
      },
      {
        path: 'assignment/:aid/statistics',
        component: AssignmentStatisticsComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }