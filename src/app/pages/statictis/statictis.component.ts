import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-statictis',
  templateUrl: './statictis.component.html',
  styleUrls: ['./statictis.component.css'],
})
export class StatictisComponent implements OnInit {
  data: {
    Value: number;
    Label: string;
  }[];
  corect: any = 0;
  question: any = 0;
  answeICorrect: number;
  ans: any;
  totalCorrect: any;
  incorrect: any = 0;
  userPic = '../../../assets/userr1.png';
  myRank: any = 0;
  leader: any;
  name: any;
  datas: any;
  id: any;
  getvalue: any;
  coin: any = 0;
  score: any = 0;
  userID: string;
  anser: number;
  corecct: any = 0;

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.datas = JSON.parse(params.data);
      this.userID = sessionStorage.getItem('userId');
    });

    if (this.datas[2] === 'al') {
      if (this.userID === undefined) {
        this.defaul();
      } else {
        this.getStatic();
      }
    }
    if (this.datas[3] === 'six') {
      if (this.userID === undefined) {
        this.defaul();
      } else {
        this.getStaticSix();
      }
    }
    if (this.datas[3] === 'ol') {
      if (this.userID === undefined) {
        this.defaul();
      } else {
        this.getStaticOL();
      }
    }
  }
  defaul(): void {
    this.myRank = 0;
    this.coin = 0;
    this.score = 0;
  }

  getStatic(): void {
    this.getScoreardAL();
    const statics = new FormData();
    statics.append('access_key', '6808');
    statics.append('get_users_statistics', '1');
    statics.append('user_id', this.userID);

    this.service.getStaticsAL(statics).subscribe((res) => {
      const result = res;
      this.corect = result.data.correct_answers;
      this.question = result.data.questions_answered;
      this.name = result.data.name;

      this.myRank = result.data.best_position;
      this.answeICorrect = (this.corect / this.question) * 100;
      // tslint:disable-next-line:radix
      this.ans = this.answeICorrect;
      const a = this.ans;
      this.totalCorrect = 100 - this.ans;

      this.incorrect = this.question - this.corect;
      this.userPic = result.data.profile;
      // tslint:disable-next-line:radix

      // tslint:disable-next-line:radix
      this.anser = parseInt(this.ans);
      // tslint:disable-next-line:radix
      this.corecct = parseInt(this.totalCorrect);

      this.data = [
        // { Value: 30, Label: 'Google',    },
        {
          // tslint:disable-next-line:radix
          Value: parseInt(this.ans),
          // tslint:disable-next-line:radix
          Label: parseInt(this.ans) + '%',
        },
        {
          // tslint:disable-next-line:radix
          Value: parseInt(this.totalCorrect),
          // tslint:disable-next-line:radix
          Label: parseInt(this.totalCorrect) + '%',
        },
      ];
    });
  }

  getStaticOL(): void {
    this.getScoreardAL();
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.datas[2]);
    user.append('profile', '');
    user.append('mobile', '0');
    user.append('type', 'gmail');
    user.append('fcm_id', '');
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.service.signupOl(user).subscribe(
      (event) => {
        this.id = event.data.user_id;

        //  const userdetails: any = [    event.data.name,    event.data.user_id  ];

        const statics = new FormData();
        statics.append('access_key', '6808');
        statics.append('get_users_statistics', '1');
        statics.append('user_id', this.id);

        this.service.getStaticsOL(statics).subscribe((res) => {
          const result = res;
          this.corect = result.data.correct_answers;
          this.question = result.data.questions_answered;
          this.name = result.data.name;

          this.myRank = result.data.best_position;
          this.answeICorrect = (this.corect / this.question) * 100;
          // tslint:disable-next-line:radix
          this.ans = this.answeICorrect;
          const a = this.ans;
          this.totalCorrect = 100 - this.ans;

          this.incorrect = this.question - this.corect;
          this.userPic = result.data.profile;
          // tslint:disable-next-line:radix

          // tslint:disable-next-line:radix
          this.anser = parseInt(this.ans);
          // tslint:disable-next-line:radix
          this.corecct = parseInt(this.totalCorrect);

          this.data = [
            // { Value: 30, Label: 'Google',    },
            {
              // tslint:disable-next-line:radix
              Value: parseInt(this.ans),
              // tslint:disable-next-line:radix
              Label: parseInt(this.ans) + '%',
            },
            {
              // tslint:disable-next-line:radix
              Value: parseInt(this.totalCorrect),
              // tslint:disable-next-line:radix
              Label: parseInt(this.totalCorrect) + '%',
            },
          ];
        });
      },
      (err) => {

      }
    );
  }

  getStaticSix(): void {
    this.getScoreardAL();
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.datas[2]);
    user.append('profile', '');
    user.append('mobile', '0');
    user.append('type', 'gmail');
    user.append('fcm_id', '');
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.service.signupSix(user).subscribe(
      (event) => {
        this.id = event.data.user_id;

        const statics = new FormData();
        statics.append('access_key', '6808');
        statics.append('get_users_statistics', '1');
        statics.append('user_id', this.id);

        this.service.getStaticsSix(statics).subscribe((res) => {
          const result = res;
          this.corect = result.data.correct_answers;
          this.question = result.data.questions_answered;
          this.name = result.data.name;

          this.myRank = result.data.best_position;
          this.answeICorrect = (this.corect / this.question) * 100;
          // tslint:disable-next-line:radix
          this.ans = this.answeICorrect;
          const a = this.ans;
          this.totalCorrect = 100 - this.ans;

          this.incorrect = this.question - this.corect;
          this.userPic = result.data.profile;
          // tslint:disable-next-line:radix
          // tslint:disable-next-line:radix
          this.anser = parseInt(this.ans);
          // tslint:disable-next-line:radix
          this.corecct = parseInt(this.totalCorrect);

          this.data = [
            // { Value: 30, Label: 'Google',    },
            {
              // tslint:disable-next-line:radix
              Value: parseInt(this.ans),
              // tslint:disable-next-line:radix
              Label: parseInt(this.ans) + '%',
            },
            {
              // tslint:disable-next-line:radix
              Value: parseInt(this.totalCorrect),
              // tslint:disable-next-line:radix
              Label: parseInt(this.totalCorrect) + '%',
            },
          ];
        });
      },
      (err) => {

      }
    );
  }

  getScoreardAL(): void {
    const id = new FormData();
    id.append('user_id', this.userID);
    this.service.getdata(id).subscribe((res) => {
      this.getvalue = res;
      this.coin = this.getvalue.coins;
      this.score = this.getvalue.score;
    });
  }

  home(): void {
    const data = ['', this.datas[1]];
    this.router.navigate([''], {
      queryParams: {
        data: JSON.stringify(data),
      },
    });
  }
}
