import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Glider from 'glider-js';
import { NavBarComponent } from 'src/app/element/nav-bar/nav-bar.component';
import { ServiceService } from '../../service/service.service';
@Component({
  selector: 'app-alevel',
  templateUrl: './alevel.component.html',
  styleUrls: ['./alevel.component.css'],
})
export class AlevelComponent implements OnInit {
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
  id: any;
  sub: any;
  userID: string;
  src: any;
  classList: any;

  constructor(
    private Serviceservice: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  loadComponents = NavBarComponent;
  ngOnInit(): void {
    const sub = new FormData();
    sub.append('access_key', '6808');
    sub.append('get_subcategory_by_maincategory', '1');
    sub.append('main_id', '19');

    this.Serviceservice.getSubcategory(sub).subscribe(
      (event) => {
        this.subcat = event;
        this.subcategory = this.subcat.data;
        this.sub = 'Biology';
      },
      (err) => {}
    );
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
    });
    this.userID = sessionStorage.getItem('userId');
    this.getDataUser();

    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');
    const slider = document.getElementById('slider');
    const innerslider = document.getElementById('slider-inner');

    let pressed = false;
    let startx;
    let x;

    slider.addEventListener('mousedown', (e) => {
      pressed = true;


      startx = e.offsetX - innerslider.offsetLeft;
      slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseenter', () => {
      slider.style.cursor = 'grab';
    });
    slider.addEventListener('mouseup', () => {
      slider.style.cursor = 'grab';
    });
    window.addEventListener('mouseup', () => {
      pressed = false;
    });
    slider.addEventListener('mousemove', (e) => {
      if (!pressed) {
        return;
      }
      e.preventDefault();
      x = e.offsetX;
      innerslider.style.left = `${x - startx}px`;
    });

    buttonLeft.addEventListener('click', () => {
      document.getElementById('slider').scrollLeft -= 180;
    });

    buttonRight.addEventListener('click', () => {
      document.getElementById('slider').scrollLeft += 180;
    });

    // tslint:disable-next-line:no-unused-expression

    // tslint:disable-next-line:no-unused-expression
    new Glider(document.querySelector('.gliderAL') as HTMLElement, {
      slidesToShow: 3,
      draggable: true,
      // dits: '#dots',
      // preView: 1,
      arrows: {
        prev: '.pre',
        next: '.nex',
      },
    });

    const td = new FormData();
    td.append('access_key', '6808');
    td.append('get_categories', '1');

    this.Serviceservice.testupdate(td).subscribe(
      (event) => {
        this.category = event;

        this.subject = this.category.data;
      },
      (err) => {}
    );
  }

  mainCategories(item): void {
    const sub = new FormData();
    sub.append('access_key', '6808');
    sub.append('get_subcategory_by_maincategory', '1');
    sub.append('main_id', item.id);

    this.Serviceservice.getSubcategory(sub).subscribe(
      (event) => {
        this.subcat = event;
        this.subcategory = this.subcat.data;
        this.sub = item.category_name;
      },
      (err) => {}
    );
  }
  profile(): void {
    this.router.navigate(['Examhub/User'], {
      queryParams: { data: JSON.stringify(this.data) },
    });
  }

  getquestion(quiz): void {
    const quiwz = [quiz.id, 1, this.data];
    this.router.navigate(['Examhub/Alquizhub'], {
      queryParams: {
        data: JSON.stringify(quiwz),
      },
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
        this.id = users.data.id;

        if (users.data.profile === '') {
          this.urllink = '../../../assets/userr1.png';
        }
      },
      (err) => {}
    );
  }
  leadeboard(): void {
    const leader = [this.userID, 'Al'];
    this.router.navigate(['Examhub/Learderboard'], {
      queryParams: {
        data: JSON.stringify(leader),
      },
    });
  }

  static(): void {
    const statictics = ['', this.id, 'al'];
    this.router.navigate(['Examhub/Statistics'], {
      queryParams: {
        data: JSON.stringify(statictics),
      },
    });
  }

  home(): void {
    const data = ['', this.data[1]];
    this.router.navigate([''], {
      queryParams: {
        data: JSON.stringify(data),
      },
    });
  }
}
