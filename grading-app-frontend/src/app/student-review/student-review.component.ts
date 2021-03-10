import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http"
import { SharedDataService } from "../shared-data.service"
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-review',
  templateUrl: './student-review.component.html',
  styleUrls: ['./student-review.component.scss']
})
export class StudentReviewComponent implements OnInit {

  public courseName: any
  public assignmentName: any
  public questions: any
  public correctAnswers: any
  public studentAnswers: any
  public answerStatus: any

  constructor(private route: ActivatedRoute,
    private http: HttpClient, private sharedData: SharedDataService,
    private location: Location) {

  }

  ngOnInit(): void {

    let aid = this.route.snapshot.params.aid

    this.http.get("http://localhost:3000/assignments/" + aid)
      .subscribe((data) => {
        this.courseName = data[0].courseName
        this.assignmentName = data[0].assignmentName
        this.questions = data[0].questions
        this.correctAnswers = data[0].correctAnswers
        this.studentAnswers = this.sharedData.studentAnswers
        this.answerStatus = this.sharedData.answerStatus
      })

  }

  goBack() {

    this.location.back();

  }

}
