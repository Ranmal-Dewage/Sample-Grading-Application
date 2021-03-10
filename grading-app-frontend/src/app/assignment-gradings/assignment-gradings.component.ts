import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http"
import { Location } from '@angular/common';

@Component({
  selector: 'app-assignment-gradings',
  templateUrl: './assignment-gradings.component.html',
  styleUrls: ['./assignment-gradings.component.scss']
})
export class AssignmentGradingsComponent implements OnInit {

  public studentGradings: any
  public headElements = ['SID', 'Name', 'AID', 'Assignment Name', 'Course Name', 'Score', 'Status']

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private location: Location) { }

  ngOnInit(): void {

    let aid = this.route.snapshot.params.aid

    this.http.get("http://localhost:3000/students/assignment/" + aid)
      .subscribe((data) => {
        this.studentGradings = data
      })

  }

  goBack() {

    this.location.back();

  }

}
