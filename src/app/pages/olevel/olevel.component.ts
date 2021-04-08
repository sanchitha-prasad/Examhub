import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Glider from 'glider-js';
import { NavBarComponent } from 'src/app/element/nav-bar/nav-bar.component';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-olevel',
  templateUrl: './olevel.component.html',
  styleUrls: ['./olevel.component.css'],
})
export class OlevelComponent implements OnInit {
  category: any;
  subject: any;
  subcategory: any;
  subcat: any;
  subQuiz: any;
  quiz: any;
  arr = [];
  data: any;

  user: any;
  name: any;
  email: any;
  mobile: any;
  urllink = '../../../assets/userr1.png';
  sub: any;
  userID: string;

  constructor(
    private Serviceservice: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  loadComponents = NavBarComponent;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
    });
    const item = '13';
    const sub = new FormData();
    sub.append('access_key', '6808');
    sub.append('get_subcategory_by_maincategory', '1');
    sub.append('main_id', item);

    this.Serviceservice.getcategoryOl(sub).subscribe(
      (event) => {
        this.subcat = event;
        this.subcategory = this.subcat.data;

        this.sub = '2018';
      },
      (err) => {

      }
    );
    this.userID = sessionStorage.getItem('userId');
    this.getDataUser();
    // tslint:disable-next-line:no-unused-expression
    new Glider(document.querySelector('.gliderAlmain') as HTMLElement, {
      slidesToShow: 3,
      draggable: true,

      arrows: {
        prev: '.preval',
        next: '.nextal',
      },
    });

    // tslint:disable-next-line:no-unused-expression
    new Glider(document.querySelector('.gliderAL') as HTMLElement, {
      slidesToShow: 2,
      draggable: true,
      arrows: {
        prev: '.pre',
        next: '.nex',
      },
    });

    const td = new FormData();
    td.append('access_key', '6808');
    td.append('get_categories', '1');

    this.Serviceservice.testupdateOl(td).subscribe(
      (event) => {
        this.category = event;

        this.subject = this.category.data;
      },
      (err) => {

      }
    );
  }

  mainCategories(item): void {
    const sub = new FormData();
    sub.append('access_key', '6808');
    sub.append('get_subcategory_by_maincategory', '1');
    sub.append('main_id', item.id);

    this.Serviceservice.getcategoryOl(sub).subscribe(
      (event) => {
        this.subcat = event;
        this.subcategory = this.subcat.data;

        this.sub = item.category_name;
      },
      (err) => {

      }
    );
  }

  getquestion(quiz): void {
    const quiwz = [quiz.id, 1, this.data, this.email];
    this.router.navigate(['Examhub/OlQuizhub'], {
      queryParams: { data: JSON.stringify(quiwz) },
    });
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

  leadeboard(): void {
    const leader = [this.data[1], 'Ol', this.email];
    this.router.navigate(['Examhub/Learderboard'], {
      queryParams: { data: JSON.stringify(leader) },
    });
  }

  profile(): void {
    this.router.navigate(['Examhub/User'], {
      queryParams: { data: JSON.stringify(this.data) },
    });
  }
  home(): void {
    const data = ['', this.data[1]];
    this.router.navigate([''], {
      queryParams: { data: JSON.stringify(data) },
    });
  }
  static(): void {
    const statictics = ['', this.data[1], this.email, 'ol'];
    this.router.navigate(['Examhub/Statistics'], {
      queryParams: { data: JSON.stringify(statictics) },
    });
  }
}
