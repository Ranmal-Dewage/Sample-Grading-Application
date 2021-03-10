import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http"
import { Location } from '@angular/common';
import { SharedDataService } from "../shared-data.service"

@Component({
  selector: 'app-assignment-statistics',
  templateUrl: './assignment-statistics.component.html',
  styleUrls: ['./assignment-statistics.component.scss']
})
export class AssignmentStatisticsComponent implements OnInit {

  public courseName: any
  public assignmentName: any
  public aid: any
  public questions: any
  public correctQuestions: any
  public incorrectQuestions: any
  public averageTimeTaken: any

  public chartType: string = 'bar';
  public chartLabels: Array<any> = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private location: Location, private sharedData: SharedDataService) { }

  ngOnInit(): void {

    let aid = this.route.snapshot.params.aid

    this.http.get("http://localhost:3000/assignments/" + aid + "/statistics")
      .subscribe((data) => {
        this.courseName = data[0].courseName
        this.assignmentName = data[0].assignmentName
        this.aid = data[0].aid
        this.questions = data[0].questions
        this.correctQuestions = [{ data: data[0].correctQuestionSum, label: "Correct Question Statistics" }]
        this.incorrectQuestions = [{ data: data[0].incorrectQuestionSum, label: "Incorrect Question Statistics" }]
        this.averageTimeTaken = [{ data: data[0].averageTimeTaken, label: "Average Time Taken per Question (Minutes)" }]
      })
  }

  goBack() {

    this.location.back();

  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
