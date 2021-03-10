import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  public teacherNName: any

  constructor(private router: Router,
    private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {

    let tid = this.route.snapshot.params.tid

    this.http.get("http://localhost:3000/teachers/" + tid)
      .subscribe((data) => {
        this.teacherNName = data[0].Name
      })

  }

  logOut() {
    this.router.navigate(['']);
  }

}
