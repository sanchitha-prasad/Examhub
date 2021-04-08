import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css'],
})
export class LeaderBoardComponent implements OnInit {
  data: any;
  leader: any;
  first: any;
  my: any;
  second: any;
  third: any;
  lederAll: any;
  arr = [];
  firstscore: any;
  secondScore: any;
  thirdScore: any;
  firstsProfile: any = '../../../assets/userr1.png';
  secondProfile: any = '../../../assets/userr1.png';
  thirdProfile: any = '../../../assets/userr1.png';
  myScore: any;
  myRank: any;
  myProfile = '../../../assets/userr1.png';
  profile: string;
  id: any;

  constructor(
    private Serviceservice: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
    });
    this.check();
  }

  check(): void {
    if (this.data[1] === '610') {
      this.leadeboard();
    }
    if (this.data[1] === 'Ol') {
      this.leadeboardOL();
    }
    if (this.data[1] === 'Al') {
      this.leadeboardAL();
    }
  }

  getdatas(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.data[2]);
    user.append('profile', '');
    user.append('mobile', '0');
    user.append('type', 'gmail');
    user.append('fcm_id', '');
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.Serviceservice.signupSix(user).subscribe(
      (event) => {
        this.id = event.data.user_id;
      },
      (err) => {

      }
    );
  }

  leadeboard(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.data[2]);
    user.append('profile', '');
    user.append('mobile', '0');
    user.append('type', 'gmail');
    user.append('fcm_id', '');
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.Serviceservice.signupSix(user).subscribe(
      (event) => {
        this.id = event.data.user_id;

        const leader = new FormData();
        leader.append('access_key', '6808');
        leader.append('get_global_leaderboard', '1');
        leader.append('limit', '100');
        leader.append('user_id', this.id);

        this.Serviceservice.LaraderBoard610(leader).subscribe(
          (res) => {
            this.leader = res;
            this.myScore = this.leader.data[0].my_rank.score;
            this.myRank = this.leader.data[0].my_rank.rank;
            this.myProfile = this.leader.data[0].my_rank.profile;
            this.my = this.leader.data[0].my_rank.name;
            if (this.leader.data[0].my_rank.score === '') {
              this.myScore = 0;
            } else {
              this.myScore = this.leader.data[0].my_rank.score;
            }

            this.firstscore = this.leader.data[1].score;
            this.secondScore = this.leader.data[2].score;
            this.thirdScore = this.leader.data[3].score;
            this.second = this.leader.data[2].name;
            this.third = this.leader.data[3].name;
            this.first = this.leader.data[1].name;

            if (
              this.leader.data[0].my_rank.profile === '' ||
              this.leader.data[0].my_rank.profile === undefined
            ) {
              this.myProfile = '../../../assets/userr1.png';
            } else {
              this.myProfile = this.leader.data[0].my_rank.profile;
            }

            if (this.leader.data[1].profile === '') {
              this.firstsProfile = '../../../assets/userr1.png';
            } else {
              this.firstsProfile = this.leader.data[1].profile;
            }
            if (this.leader.data[2].profile === '') {
              this.secondProfile = '../../../assets/userr1.png';
            } else {
              this.secondProfile = this.leader.data[2].profile;
            }

            if (this.leader.data[3].profile === '') {
              this.thirdProfile = '../../../assets/userr1.png';
            } else {
              this.thirdProfile = this.leader.data[3].profile;
            }

            this.lederAll = this.leader.data;
            const le = this.leader.data.length;

            for (let l = 4; l < le; l++) {
              this.arr.push(this.lederAll[l]);
            }
          },
          (err) => {

          }
        );
      },
      (err) => {

      }
    );
  }

  leadeboardOL(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.data[2]);
    user.append('profile', '');
    user.append('mobile', '0');
    user.append('type', 'gmail');
    user.append('fcm_id', '');
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.Serviceservice.signupOl(user).subscribe(
      (event) => {
        this.id = event.data.user_id;

        const leader = new FormData();
        leader.append('access_key', '6808');
        leader.append('get_global_leaderboard', '1');
        leader.append('limit', '10');
        leader.append('user_id', this.id);

        this.Serviceservice.LaraderBoardOl(leader).subscribe(
          (res) => {
            this.leader = res;
            this.myScore = this.leader.data[0].my_rank.score;
            this.myRank = this.leader.data[0].my_rank.rank;
            this.myProfile = this.leader.data[0].my_rank.profile;
            this.my = this.leader.data[0].my_rank.name;
            if (this.leader.data[0].my_rank.score === '') {
              this.myScore = 0;
            } else {
              this.myScore = this.leader.data[0].my_rank.score;
            }

            this.firstscore = this.leader.data[1].score;
            this.secondScore = this.leader.data[2].score;
            this.thirdScore = this.leader.data[3].score;
            this.second = this.leader.data[2].name;
            this.third = this.leader.data[3].name;
            this.first = this.leader.data[1].name;

            if (
              this.leader.data[0].my_rank.profile === '' ||
              this.leader.data[0].my_rank.profile === undefined
            ) {
              this.myProfile = '../../../assets/userr1.png';
            } else {
              this.myProfile = this.leader.data[0].my_rank.profile;
            }

            if (this.leader.data[1].profile === '') {
              this.firstsProfile = '../../../assets/userr1.png';
            } else {
              this.firstsProfile = this.leader.data[1].profile;
            }
            if (this.leader.data[2].profile === '') {
              this.secondProfile = '../../../assets/userr1.png';
            } else {
              this.secondProfile = this.leader.data[2].profile;
            }

            if (this.leader.data[3].profile === '') {
              this.thirdProfile = '../../../assets/userr1.png';
            } else {
              this.thirdProfile = this.leader.data[3].profile;
            }

            this.lederAll = this.leader.data;
            const le = this.leader.data.length;

            for (let l = 4; l < le; l++) {
              this.arr.push(this.lederAll[l]);
            }
          },
          (err) => {

          }
        );
      },
      (err) => {

      }
    );
  }

  leadeboardAL(): void {
    const leader = new FormData();
    leader.append('access_key', '6808');
    leader.append('get_global_leaderboard', '1');
    leader.append('limit', '10');
    leader.append('user_id', this.data[0]);

    this.Serviceservice.LaraderBoardAl(leader).subscribe(
      (res) => {
        this.leader = res;
        this.myScore = this.leader.data[0].my_rank.score;
        this.myRank = this.leader.data[0].my_rank.rank;
        this.myProfile = this.leader.data[0].my_rank.profile;
        this.my = this.leader.data[0].my_rank.name;
        if (this.leader.data[0].my_rank.score === '') {
          this.myScore = 0;
        } else {
          this.myScore = this.leader.data[0].my_rank.score;
        }

        this.firstscore = this.leader.data[1].score;
        this.secondScore = this.leader.data[2].score;
        this.thirdScore = this.leader.data[3].score;
        this.second = this.leader.data[2].name;
        this.third = this.leader.data[3].name;
        this.first = this.leader.data[1].name;

        if (
          this.leader.data[0].my_rank.profile === '' ||
          this.leader.data[0].my_rank.profile === undefined
        ) {
          this.myProfile = '../../../assets/userr1.png';
        } else {
          this.myProfile = this.leader.data[0].my_rank.profile;
        }

        if (this.leader.data[1].profile === '') {
          this.firstsProfile = '../../../assets/userr1.png';
        } else {
          this.firstsProfile = this.leader.data[1].profile;
        }
        if (this.leader.data[2].profile === '') {
          this.secondProfile = '../../../assets/userr1.png';
        } else {
          this.secondProfile = this.leader.data[2].profile;
        }

        if (this.leader.data[3].profile === '') {
          this.thirdProfile = '../../../assets/userr1.png';
        } else {
          this.thirdProfile = this.leader.data[3].profile;
        }

        this.lederAll = this.leader.data;
        const le = this.leader.data.length;

        for (let l = 4; l < le; l++) {
          this.arr.push(this.lederAll[l]);
        }
      },
      (err) => {

      }
    );
  }
  home(): void {
    const data = ['', this.data[0]];
    this.router.navigate([''], {
      queryParams: {
        data: JSON.stringify(data),
      },
    });
  }
}
