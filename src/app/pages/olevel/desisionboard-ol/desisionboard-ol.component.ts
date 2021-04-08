import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarComponent } from 'src/app/element/nav-bar/nav-bar.component';
import { ServiceService } from 'src/app/service/service.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-desisionboard-ol',
  templateUrl: './desisionboard-ol.component.html',
  styleUrls: ['./desisionboard-ol.component.css'],
})
export class DesisionboardOlComponent implements OnInit {
  data: any;
  wrong: any;
  correct: any;
  score: any;
  presentages: number;
  coins = 0;
  totalCoins = 0;
  totalscore = 0;
  getvalue: any;
  key: any;
  id: any;
  userID: string;

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  loadComponents = NavBarComponent;
  ngOnInit(): void {
    this.getdata();
    this.NumberOfsnswer();
    this.presentage();
    this.collectcoins();
    this.totalvalue();
    this.getcoinsvalue();
    this.getdatas();
    this.userID = sessionStorage.getItem('userId');
  }

  getdata(): void {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
    });
  }

  NumberOfsnswer(): void {
    this.wrong = this.data[0];
    this.correct = this.data[1];
    this.score = this.data[2];
  }
  presentage(): void {
    this.presentages = this.correct * 10;
  }
  collectcoins(): void {
    if (this.correct % 2 === 0) {
      this.coins = this.correct; /// if the number is odd
    } else {
      const coins = this.correct / 2;
      this.coins = coins - 0.5;
    }

  }
  totalvalue(): void {
    if (this.score >= 0) {
      this.totalscore = this.totalscore + Number(this.score);
      this.totalCoins = this.totalCoins + Number(this.coins);
    } else {
      this.totalscore = 0;
      this.totalCoins = this.totalCoins + this.coins;
    }
  }
  getcoinsvalue(): void {
    const id = new FormData();
    this.userID = sessionStorage.getItem('userId');


    id.append('user_id', this.userID);
    this.service.getdata(id).subscribe((res) => {
      const value = res;

      let coins = value.coins;
      let score = value.score;
      if (value === 0) {
        coins = 0;
        score = 0;
      }

      this.totalCoins = Number(coins) + this.totalCoins;
      this.totalscore = Number(score) + this.totalscore;
    });
  }

  datasave(): void {
    const id = new FormData();
    id.append('user_id', this.userID);
    this.service.getdata(id).subscribe((res) => {
      this.getvalue = res;

      const data = new FormData();
      data.append('score', String(this.totalscore));
      data.append('coins', String(this.totalCoins));
      data.append('user_id', this.userID);

      if (this.getvalue === 0) {
        this.service.addata(data).subscribe((event) => {});
      } else {
        this.service.update(data).subscribe((event) => {});
      }

      this.nextRound();
    });
  }

  ChevkCorrect(): void {
    const value = [this.data[3], this.data[4]];
    this.router.navigate(['Examhub/OlCorrectAnswer'], {
      queryParams: {
        data: JSON.stringify(value),
      },
    });
  }

  getdatas(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.data[3][3]);
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
      },
      (err) => {

      }
    );
  }

  nextRound(): void {
    const data = this.data[3][1] + 1;

    if (data <= this.data[4]) {
      const Al = [this.data[3][0], data, this.data[3][2], this.totalscore];
      this.router.navigate(['Examhub/OlQuizhub'], {
        queryParams: {
          data: JSON.stringify(Al),
        },
      });
      this.setLeaderboard();
      this.setStatics();
    } else {
      swal.fire('Level completed!', '!', 'success').then((value) => {
        this.router.navigate(['Examhub/GradeSix']);
      });
    }
  }

  setLeaderboard(): void {
    const score = new FormData();
    score.append('access_key', '6808');
    score.append('set_monthly_leaderboard', '1');
    score.append('user_id', this.id);
    score.append('score', this.score);
    this.service.setMonthlyLeaderboardOl(score).subscribe((res) => {});
  }

  setStatics(): void {
    const Statics = new FormData();
    Statics.append('access_key', '6808');
    Statics.append('set_users_statistics', '1');
    Statics.append('user_id', this.id);
    Statics.append('questions_answered', '10');
    Statics.append('correct_answers', this.data[1]);
    Statics.append('category_id', this.data[3][0]);
    Statics.append('ratio', String(this.presentages));
    Statics.append('coins', String(this.coins));

    this.service.setStaticsOL(Statics).subscribe(
      (res) => {},
      (err) => {

      }
    );
  }
  home(): void {
    const data = ['', this.data[2][1]];
    this.router.navigate([''], {
      queryParams: { data: JSON.stringify(data) },
    });
  }
}
