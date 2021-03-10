import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http"
import { SharedDataService } from "../shared-data.service"

@Component({
  selector: 'app-student-results',
  templateUrl: './student-results.component.html',
  styleUrls: ['./student-results.component.scss']
})
export class StudentResultsComponent implements OnInit {

  public student: any
  public assignments: any


  constructor(private router: Router, private route: ActivatedRoute,
    private http: HttpClient, private sharedData: SharedDataService) {

  }

  ngOnInit(): void {

    let sid = this.route.snapshot.params.sid

    this.http.get("http://localhost:3000/students/" + sid)
      .subscribe((data) => {
        this.student = data[0]
        this.assignments = data[0].assignments
      })

  }

  reviewResults(aid: any, answers: any, status: any) {

    this.sharedData.setReviewDetails(answers, status)
    this.router.navigate(['assignment', aid], { relativeTo: this.route })

  }

}
