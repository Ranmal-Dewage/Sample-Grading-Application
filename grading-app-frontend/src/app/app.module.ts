
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from "angular-notifier";

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentResultsComponent } from './student-results/student-results.component';
import { StudentReviewComponent } from './student-review/student-review.component';
import { TeacherAssignmentsComponent } from './teacher-assignments/teacher-assignments.component';
import { AssignmentGradingsComponent } from './assignment-gradings/assignment-gradings.component';
import { AssignmentStatisticsComponent } from './assignment-statistics/assignment-statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    StudentResultsComponent,
    StudentReviewComponent,
    TeacherAssignmentsComponent,
    AssignmentGradingsComponent,
    AssignmentStatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NotifierModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
