import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import Glider from 'glider-js';

import { NavBarComponent } from 'src/app/element/nav-bar/nav-bar.component';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-grade-six',
  templateUrl: './grade-six.component.html',
  styleUrls: ['./grade-six.component.css'],
})
export class GradeSixComponent implements OnInit {
  category: any;
  maincategory: any;
  message: any;
  data: any;

  user: any;
  name: any;
  email: any;
  mobile: any;
  urllink = '../../../assets/userr1.png';
  gradeal: any;
  userID: any;

  constructor(
    private router: Router,
    private Service: ServiceService,
    private route: ActivatedRoute
  ) {}
  loadComponents = NavBarComponent;
  ngOnInit(): void {
    this.gradeal = '6ශ්‍රේණිය';
    this.subCategories(1);
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
    });


    this.userID = sessionStorage.getItem('userId');
    this.getDataUser();
    // tslint:disable-next-line:no-unused-expression
    new Glider(document.querySelector('.glider6') as HTMLElement, {
      slidesToShow: 4,
      draggable: true,
      arrows: {
        prev: '.prev1',
        next: '.next1',
      },
    });
  }
  grade(value): void {
    //  this.router.navigate(['Examhub/Quizhub']);
    this.gradeal = '6ශ්‍රේණිය';
    this.subCategories(value);
  }
  grade1(value): void {
    this.subCategories(value);

    this.gradeal = '7ශ්‍රේණිය';
  }
  grade2(value): void {
    this.subCategories(value);
    this.gradeal = '8ශ්‍රේණිය';
  }
  grade3(value): void {
    this.subCategories(value);
    this.gradeal = '9ශ්‍රේණිය';
  }
  grade4(value): void {
    this.subCategories(value);
    this.gradeal = '10ශ්‍රේණිය';
  }
  grade5(value): void {
    this.subCategories(value);
  }

  subCategories(item): void {
    const sub = new FormData();
    sub.append('access_key', '6808');
    sub.append('get_subcategory_by_maincategory', '1');
    sub.append('main_id', item);

    this.Service.getcategorySix(sub).subscribe(
      (event) => {
        this.category = event;
        this.maincategory = this.category.data;

        this.message = event.message;
        console.log(event);

      },
      (err) => {

      }
    );
  }

  subject(quiz): void {
    if (this.data === undefined) {
      swal.queue([
        {
          title: 'Life Line Already Use !!',
          text: 'you can use only one per level',
          // icon: 'mood', buttons: true,
          // dangerMode: true
        },
      ]);
    } else {
      const quiwz = [quiz.id, 1, this.data, this.email];
      this.router.navigate(['Examhub/610Quizhub'], {
        queryParams: {
          data: JSON.stringify(quiwz),
        },
      });
    }
  }

  getDataUser(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('get_user_by_id', '1');
    user.append('id', this.userID);

    this.Service.getUserByID(user).subscribe(
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
    const leader = [this.data[1], '610', this.email];
    this.router.navigate(['Examhub/Learderboard'], {
      queryParams: {
        data: JSON.stringify(leader),
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

  static(): void {
    const statictics = ['', this.data[1], this.email, 'six'];
    this.router.navigate(['Examhub/Statistics'], {
      queryParams: {
        data: JSON.stringify(statictics),
      },
    });
  }
}
