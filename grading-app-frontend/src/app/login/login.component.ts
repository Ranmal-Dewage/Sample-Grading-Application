import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public selectType = "student"
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private router: Router, private route: ActivatedRoute,
    private http: HttpClient, private notifierService: NotifierService) {

  }

  ngOnInit(): void {
  }

  onSubmit(data: any) {

    if (data.selectType == 'student') {

      let studentData = {
        id: data.id,
        password: data.password
      }

      this.http.post("http://localhost:3000/students/login", JSON.stringify(studentData), this.httpOptions)
        .subscribe((reponse) => {

          if (reponse[0].status) {
            this.router.navigate(['student', data.id]);
          } else {
            this.notifierService.notify("error", "User Id or Password is Invalid !!!");
          }

        })

    } else {

      let teacherData = {
        id: data.id,
        password: data.password
      }

      this.http.post("http://localhost:3000/teachers/login", JSON.stringify(teacherData), this.httpOptions)
        .subscribe((reponse) => {

          if (reponse[0].status) {
            this.router.navigate(['teacher', data.id]);
          } else {
            this.notifierService.notify("error", "User Id or Password is Invalid !!!");
          }

        })

    }

  }

}
