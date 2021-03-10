import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http"
import { SharedDataService } from "../shared-data.service"

@Component({
  selector: 'app-teacher-assignments',
  templateUrl: './teacher-assignments.component.html',
  styleUrls: ['./teacher-assignments.component.scss']
})
export class TeacherAssignmentsComponent implements OnInit {

  public teacher: any
  public assignments: any

  constructor(private router: Router, private route: ActivatedRoute,
    private http: HttpClient, private sharedData: SharedDataService) {

  }

  ngOnInit(): void {

    let tid = this.route.snapshot.params.tid

    this.http.get("http://localhost:3000/teachers/" + tid)
      .subscribe((data) => {
        this.teacher = data[0]
        this.assignments = data[0].assignments
      })

  }

  routeToOverallGradings(aid) {

    this.router.navigate(['assignment', aid, 'gradings'], { relativeTo: this.route })

  }

  routeToStatistics(aid) {

    this.router.navigate(['assignment', aid, 'statistics'], { relativeTo: this.route })

  }

}
