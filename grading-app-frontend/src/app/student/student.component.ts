import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public studentName: any

  constructor(private router: Router, private route: ActivatedRoute,
    private http: HttpClient) {

  }

  ngOnInit(): void {

    let sid = this.route.snapshot.params.sid

    this.http.get("http://localhost:3000/students/" + sid)
      .subscribe((data) => {
        this.studentName = data[0].Name
      })
  }

  logOut() {
    this.router.navigate(['']);
  }



}
