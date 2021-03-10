import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public studentAnswers: any
  public answerStatus: any

  constructor() { }

  setReviewDetails(answers: any, status: any) {

    this.studentAnswers = answers
    this.answerStatus = status

  }


}
