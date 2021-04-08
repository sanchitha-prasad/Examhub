import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import swal from 'sweetalert2';
import { Location } from '@angular/common';
@Component({
  selector: 'app-corectanswer-ol',
  templateUrl: './corectanswer-ol.component.html',
  styleUrls: ['./corectanswer-ol.component.css'],
})
export class CorectanswerOlComponent implements OnInit {
  data: any;
  subQuiz: any;
  quiz: any;

  le: any;
  levels = [];
  index = 10;
  arr = [];
  loq: any;
  question: any;
  count = 0;
  leng: any;
  correctanswer = 0;
  progras = 0;
  progras1 = 0;
  number1 = 0;
  number = 0;
  time = 0;
  timelist = [];
  timeing = 0;
  tims: any;
  level: any;
  counting = 0;

  constructor(
    private Serviceservice: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
    });

    const ques = new FormData();
    ques.append('access_key', '6808');
    ques.append('get_questions_by_subcategory', '1');
    ques.append('subcategory', this.data[0]);
    this.Serviceservice.getquestionOl(ques).subscribe(
      (event) => {
        this.subQuiz = event;

        this.quiz = this.subQuiz.data;
        const v = this.quiz.length;
        const level = v / 10;

        for (let l = 0; l < level; l++) {
          this.le = l + 1;
          this.arr.push(this.le);
        }


      },
      (err) => {

      }
    );

    // this.getnumber();

    const levlQuiz = new FormData();
    levlQuiz.append('access_key', '6808');
    levlQuiz.append('get_questions_by_level', '1');
    levlQuiz.append('level', this.data[0][1]);
    levlQuiz.append('subcategory', this.data[0][0]);
    this.Serviceservice.levelbyQuestionOl(levlQuiz).subscribe(
      (event) => {
        this.question = event;
        this.loq = this.question.data[0];
        this.leng = this.question.data.length;
        //  const anser = this.question.answer;
        const h2 = document.getElementById(this.loq.answer);
        h2.classList.add('correct');
      },
      (err) => {

      }
    );
  }
  next(): void {
    const h2 = document.getElementById(this.loq.answer);
    h2.classList.remove('correct');
    this.count = this.count + 1;
    if (this.count < this.leng) {
      this.loq = this.question.data[this.count];

      // this.loq.answer =0
      this.loq.answer = this.question.data[this.count].answer;

      const h1 = document.getElementById(this.loq.answer);
      h1.classList.add('correct');
    } else {
      this.count = 0;

      swal.fire('Oops!', 'අවසානයි !', 'error');
    }
  }

  previous(): void {
    const h2 = document.getElementById(this.loq.answer);
    h2.classList.remove('correct');
    this.count = this.count - 1;
    if (this.count >= 0) {
      this.loq = this.question.data[this.count];

      // this.loq.answer =0
      this.loq.answer = this.question.data[this.count].answer;

      const h1 = document.getElementById(this.loq.answer);
      h1.classList.add('correct');
    } else {
      this.count = 0;

      swal.fire('Oops!', 'අවසානයි !', 'error');
    }
  }


  back(): void {
    this._location.back();
  }

}
