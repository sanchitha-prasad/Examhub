import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { NavBarComponent } from 'src/app/element/nav-bar/nav-bar.component';
import { ServiceService } from 'src/app/service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-olquizhub',
  templateUrl: './olquizhub.component.html',
  styleUrls: ['./olquizhub.component.css'],
})
export class OlquizhubComponent implements OnInit {
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
  getcoin = 0;
  chance = 0;
  chanse = 0;
  chanse1 = 0;
  chance2 = 0;
  chance3 = 0;
  prec: number;
  prec4: number;
  prec3: number;
  prec2: number;
  prec1: number;
  img: any;
  quis: any;
  option: any;
  optiond: any;
  optionc: any;
  optionb: any;
  optiona: any;
  optione: any;
  lev: any;

  user: any;
  name: any;
  email: any;
  mobile: any;
  urllink = '../../../assets/userr1.png';
  score: string | Blob;
  userID: string;

  constructor(
    private Serviceservice: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  loadComponents = NavBarComponent;
  ngOnInit(): void {
    // this.activelevel();
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
    });
    this.userID = sessionStorage.getItem('userId');
    this.getDataUser();
    this.lev = this.data[1];

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
    levlQuiz.append('level', this.data[1]);
    levlQuiz.append('subcategory', this.data[0]);
    this.Serviceservice.levelbyQuestionOl(levlQuiz).subscribe(
      (event) => {
        this.question = event;
        if (this.question.data === undefined) {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No Data Found!',
          });
        }
        this.loq = this.question.data[0];
        this.img = this.question.data[0].image;
        this.leng = this.question.data.length;
        this.quis = this.question.data[0].question;
        this.optiona = this.question.data[0].optiona;
        this.optionb = this.question.data[0].optionb;
        this.optionc = this.question.data[0].optionc;
        this.optiond = this.question.data[0].optiond;
        this.optione = this.question.data[0].optione;
      },
      (err) => {

      }
    );

    this.timegenearte();
    this.getcoind();


  }

  getcoind(): void {
    const id = new FormData();
    id.append('user_id', this.userID);
    this.Serviceservice.getdataOl(id).subscribe((res) => {
      const coins = res;
      this.score = coins.score;
      if (coins === 0) {
        this.getcoin = 0;
      } else {
        this.getcoin = coins.coins;
      }
    });
  }



  correctAnser(answer): void {
    // this.timegenearte();
    document.getElementById('loading').style.display = 'block';
    document.getElementById('a').setAttribute('disabled', 'disabled');
    document.getElementById('b').setAttribute('disabled', 'disabled');
    document.getElementById('c').setAttribute('disabled', 'disabled');
    document.getElementById('d').setAttribute('disabled', 'disabled');
    this.tims = 0;
    this.getnumber();
    if (this.loq.answer === answer) {
      const h2 = document.getElementById(answer);
      h2.classList.add('correct');
      this.correctanswer = this.correctanswer + 4;
      this.number = this.number + 1;
      this.progras = this.progras + 10;
      document.getElementById('green').style.height = this.progras + '%';

      setTimeout(() => {
        this.tims = 1;
        this.timeing = 0;

        this.count = this.count + 1;
        // this.time = 0;
        this.optiona = this.question.data[this.count].optiona;
        this.optionb = this.question.data[this.count].optionb;
        this.optionc = this.question.data[this.count].optionc;
        this.optiond = this.question.data[this.count].optiond;
        this.optione = this.question.data[this.count].optione;
        this.quis = this.question.data[this.count].question;
        this.img = this.question.data[this.count].image;
        this.loq = this.question.data[this.count];
        h2.classList.remove('correct');
        this.removeprecentage();
        this.removeHidden();
        document.getElementById('a').removeAttribute('disabled');
        document.getElementById('b').removeAttribute('disabled');
        document.getElementById('c').removeAttribute('disabled');
        document.getElementById('d').removeAttribute('disabled');
        document.getElementById('loading').style.display = 'none';
      }, 3000);
    } else {
      const an = document.getElementById(this.loq.answer);
      an.classList.add('correct');
      this.correctanswer = this.correctanswer - 2;

      this.number1 = this.number1 + 1;
      this.progras1 = this.progras1 + 10;
      document.getElementById('red').style.height = this.progras1 + '%';

      const answe = document.getElementById(answer);
      answe.classList.add('incorrect');
      setTimeout(() => {
        this.tims = 1;
        this.timeing = 0;

        this.count = this.count + 1;
        // this.time = 0;
        this.img = this.question.data[this.count].image;
        this.quis = this.question.data[this.count].question;
        this.optiona = this.question.data[this.count].optiona;
        this.optionb = this.question.data[this.count].optionb;
        this.optionc = this.question.data[this.count].optionc;
        this.optiond = this.question.data[this.count].optiond;
        this.optione = this.question.data[this.count].optione;
        this.loq = this.question.data[this.count];
        answe.classList.remove('incorrect');
        an.classList.remove('correct');
        this.removeprecentage();
        this.removeHidden();
        document.getElementById('a').removeAttribute('disabled');
        document.getElementById('b').removeAttribute('disabled');
        document.getElementById('c').removeAttribute('disabled');
        document.getElementById('d').removeAttribute('disabled');
        document.getElementById('loading').style.display = 'none';
        // document.getElementById('a').disabled = true;
      }, 3000);

      // $('#a *').attr('disabled', 'disabled').off('click');
    }
    // tslint:disable-next-line:align
  }

  getnumber(): void {

    if (this.count < this.leng - 1) {
    } else {
      const datanew = new FormData();

      datanew.append('coins', String(this.getcoin));
      datanew.append('score', this.score);
      datanew.append('user_id', this.userID);
      this.Serviceservice.update(datanew).subscribe((event) => {});

      this.count = 0;
      setTimeout(() => {
        const valuenumber = [
          this.number1,
          this.number,
          this.correctanswer,
          this.data,
          this.le,
        ];

        if (this.number >= 3) {
          this.router.navigate(['Examhub/OlDecisionboard'], {
            queryParams: { data: JSON.stringify(valuenumber) },
          });
        } else {
          this.router.navigate(['Examhub/OlDecisionboardtry'], {
            queryParams: { data: JSON.stringify(valuenumber) },
          });
        }
      }, 3000);
    }
  }

  timegenearte(): void {
    for (let index = 120; index >= 0; index--) {
      this.timelist.push(index);
    }
    const timer$ = interval(1000);
    const sub = timer$.subscribe((sec) => {
      this.timeing = this.timeing + 1;
      this.time = this.timelist[this.timeing];

      if (this.time === 0) {
        this.count = this.count + 1;
        this.optiona = this.question.data[this.count].optiona;
        this.optionb = this.question.data[this.count].optionb;
        this.optionc = this.question.data[this.count].optionc;
        this.optiond = this.question.data[this.count].optiond;
        this.optione = this.question.data[this.count].optione;
        this.img = this.question.data[this.count].image;
        this.loq = this.question.data[this.count];
        this.quis = this.question.data[this.count].question;

        this.timeing = 0;
      }
    });
  }
  fifty(value): void {
    if (this.getcoin < 4) {
      swal.queue([
        {
          title: 'Not Enough Coins..!!',
          text:
            'you dont have enough coins. You need to least 4 coins to use this lifeline ',
          // icon: 'mood',
          // buttons: true,
          // dangerMode: true,
        },
      ]);
    } else {
      this.chanse = this.chanse + Number(value);

      if (this.chanse === 1) {
        this.chanse = this.chanse + 1;
        this.hiddenElment();

        this.getcoin = this.getcoin - 4;
      } else {
        swal.queue([
          {
            title: 'Life Line Already Use !!',
            text: 'you can use only one per level',
            // icon: 'mood',
            // buttons: true,
            // dangerMode: true,
          },
        ]);
      }
    }
  }

  skip(value): void {
    // this.chanse1 = 0;
    if (this.getcoin < 2) {
      swal.queue([
        {
          title: 'Not Enough Coins..!!',
          text:
            'you dont have enough coins. You need to least 2 coins to use this lifeline ',
          // icon: 'mood',
          // buttons: true,
          // dangerMode: true,
        },
      ]);
    } else {
      this.chanse1 = this.chanse1 + Number(value);

      if (this.chanse1 === 1) {
        this.chanse1 = this.chanse1 + 1;
        this.count = this.count + 1;
        this.img = this.question.data[this.count].image;
        this.quis = this.question.data[this.count].question;
        this.optiona = this.question.data[this.count].optiona;
        this.optionb = this.question.data[this.count].optionb;
        this.optionc = this.question.data[this.count].optionc;
        this.optiond = this.question.data[this.count].optiond;
        this.optione = this.question.data[this.count].optione;
        this.loq = this.question.data[this.count];
        this.getcoin = this.getcoin - 2;
      } else {
        swal.queue([
          {
            title: 'Life Line Already Use !!',
            text: 'you can use only one per level',
            // icon: 'mood',
            // buttons: true,
            // dangerMode: true,
          },
        ]);
      }
    }
  }

  friends(value): void {
    if (this.getcoin < 4) {
      swal.queue([
        {
          title: 'Not Enough Coins..!!',
          text:
            'you dont have enough coins. You need to least 4 coins to use this lifeline ',
          // icon: 'mood',
          // buttons: true,
          // dangerMode: true,
        },
      ]);
    } else {
      this.chance2 = this.chance2 + Number(value);

      if (this.chance2 <= 1) {
        this.chance2++;
        this.precentageview();
        this.getcoin = this.getcoin - 4;
      } else {
        swal.queue([
          {
            title: 'Life Line Already Use !!',
            text: 'you can use only one per level',
            // icon: 'mood',
            // buttons: true,
            // dangerMode: true,
          },
        ]);
      }
    }
  }

  timeinc(value): void {
    this.chance = 0;
    if (this.getcoin < 4) {
      swal.queue([
        {
          title: 'Not Enough Coins..!!',
          text:
            'you dont have enough coins. You need to least 4 coins to use this lifeline ',
          // icon: 'mood',
          // buttons: true,
          // dangerMode: true,
        },
      ]);
    } else {
      this.chance3 = this.chance3 + Number(value);

      if (this.chance3 <= 1) {
        this.chance3++;
        this.tims = 1;
        this.timeing = 0;
        // this.timegenearte();
        this.getcoin = this.getcoin - 4;
      } else {
        swal.queue([
          {
            title: 'Life Line Already Use !!',
            text: 'you can use only one per level',
            // icon: 'mood',
            // buttons: true,
            // dangerMode: true,
          },
        ]);
      }
    }
  }

  hiddenElment(): void {
    if (this.loq.answer === 'a') {
      const hidden = document.getElementById('a');
      hidden.classList.add('light');
    } else {
      const hidden = document.getElementById('a');
      hidden.classList.add('light1');
    }

    if (this.loq.answer === 'c') {
      const hidden = document.getElementById('c');
      hidden.classList.add('light');
    } else {
      const hidden = document.getElementById('c');
      hidden.classList.add('light1');
    }
  }
  removeHidden(): void {
    const hidden = document.getElementById('a');
    hidden.classList.remove('light');
    hidden.classList.remove('light1');

    const hidden1 = document.getElementById('c');
    hidden1.classList.remove('light');
    hidden1.classList.remove('light1');

    const hidden2 = document.getElementById('d');
    hidden2.classList.remove('light');
    hidden2.classList.remove('light1');
  }

  precentageview(): void {
    const hidden2 = document.getElementById('A');
    hidden2.classList.add('circle2');
    const hidden = document.getElementById('B');
    hidden.classList.add('circle2');
    const hidden3 = document.getElementById('C');
    hidden3.classList.add('circle2');
    const hidden4 = document.getElementById('D');
    hidden4.classList.add('circle2');

    if (this.loq.answer === 'a') {
      this.prec = 48;
    } else {
      this.prec = Math.floor(Math.random() * 47);
    }

    if (this.loq.answer === 'b') {
      this.prec1 = 48;
    } else {
      this.prec1 = Math.floor(Math.random() * 47);
    }

    if (this.loq.answer === 'c') {
      this.prec2 = 48;
    } else {
      this.prec2 = Math.floor(Math.random() * 47);
    }

    if (this.loq.answer === 'd') {
      this.prec3 = 48;
    } else {
      this.prec3 = Math.floor(Math.random() * 47);
    }
  }

  removeprecentage(): void {
    const hidden2 = document.getElementById('A');
    hidden2.classList.remove('circle2');
    const hidden = document.getElementById('B');
    hidden.classList.remove('circle2');
    const hidden3 = document.getElementById('C');
    hidden3.classList.remove('circle2');
    const hidden4 = document.getElementById('D');
    hidden4.classList.remove('circle2');
  }

  activelevel(): void {
    const hidden2 = document.getElementById('aaa');
    hidden2.style.backgroundColor = 'red';
  }

  getDataUser(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('get_user_by_id', '1');
    user.append('id', this.userID);

    this.Serviceservice.getUserByID(user).subscribe(
      (res) => {
        const users = res;
        this.user = users.data.name;
        this.mobile = users.data.mobile;
        this.email = users.data.email;
        this.urllink = users.data.profile;

        if (users.data.profile === '') {
          this.urllink = '../../../assets/userr1.png';
        }
      },
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
