import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-decistonboardwrong',
  templateUrl: './decistonboardwrong.component.html',
  styleUrls: ['./decistonboardwrong.component.css']
})
export class DecistonboardwrongComponent implements OnInit {
  data: any;
  wrong: any;
  correct: any;
  score: any;
  totalCoins = 0;
  totalscore =  0;
  userID: string;
  present: number;

  constructor(  private Serviceservice: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getdata();
    this.NumberOfsnswer();
    this.getcoinsvalue();
    this.userID = sessionStorage.getItem('userId');
   }

  getdata(): void {
    this.route.queryParams.subscribe(( params => {
      console.log(params);
      this.data = JSON.parse(params.data);

    }));
  }

  NumberOfsnswer(): void {
    this.wrong = this.data[0];
    this.correct = this.data[1];
    this.score = this.data[2];
    console.log(this.wrong , this.correct, this.score);
    this.present = this.correct * 10;
  }

  getcoinsvalue(): void {
    const id = new FormData();
    this.userID = sessionStorage.getItem('userId');
    id.append('user_id', this.userID);
    this
        .Serviceservice
        .getdata(id)
        .subscribe((res) => {

            const value = res;
            console.log(value);
            this.totalCoins = value.coins;
            this.totalscore = value.score;
        });

}

retry(): void {
  const data = this.data[3][1];
  console.log(this.data[4]);

  const Al = [
          this.data[3][0],
          data,
          this.data[3][2],
          this.totalscore

      ];
  this
          .router
          .navigate(['Examhub/Alquizhub'], {
              queryParams: {
                  data: JSON.stringify(Al)
              }
          });
  console.log(Al);


}
ChevkCorrect(): void {
  const value = [
      this.data[3], this.data[4]
  ];
  this
      .router
      .navigate(['Examhub/CorrectAnswer'], {
          queryParams: {
              data: JSON.stringify(value)
          }
      });
}
home(): void {
  const data = [
    '',
    this.data[2][1]
  ];
  this.router.navigate([''], {
    queryParams: {data: JSON.stringify(data)}
});
}
}
