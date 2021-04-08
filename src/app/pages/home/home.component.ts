import { NavBarComponent } from './../../element/nav-bar/nav-bar.component';
import { Component, OnInit } from '@angular/core';
import Glider from 'glider-js';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  user: any;
  name: any;
  email: any;
  mobile: any;
  urllink = '../../../assets/userr1.png';
  id: any;
  notify: any;
  down = false;
  notifi: any;
  userID: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service: ServiceService
  ) {}
  loadComponents = NavBarComponent || '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);


    });

    const body = document.getElementById('body');
    window.addEventListener('mouseup', (e) => {
      const box = document.getElementById('box');
      if (e.target !== box) {
        box.style.height = '0';
        box.style.opacity = '0';
      }
    });

    this.userID = sessionStorage.getItem('userId');
    this.divicecheck();
    this.getnotification();

    if (this.data === undefined) {
      this.loadComponents = NavBarComponent;
      document.getElementById('nav').style.display = 'none';
    } else {
      this.getDataUser();
      // $("#nav").load(" #nav"); $( '#nav' ).load(window.location.href + ' #nav' );
      document.getElementById('nav').style.display = 'block';

      // nav.classList.remove('nav');
      this.loadComponents = '';
    }
    // tslint:disable-next-line:no-unused-expression
    new Glider(document.querySelector('.glidermain') as HTMLElement, {
      slidesToShow: 3,
      draggable: true,

      arrows: {
        prev: '.prevhome',
        next: '.nexthome',
      },
    });
  }
  btntoggle(): void {
    if ($('.item').hasClass('active')) {
      $('.item').removeClass('active');
    } else {
      $('.item').addClass('active');
    }
  }

  // tslint:disable-next-line:typedef
  grade6() {
    if (this.data === undefined) {
      swal.queue([
        {
          title: 'Please login your account',
          // text: 'you can use only one per level', icon: 'mood', buttons: true,
        },
      ]);
    } else {
      this.router.navigate(['Examhub/GradeSix'], {
        queryParams: {
          data: JSON.stringify(this.data),
        },
      });
    }
  }

  olevel(): void {
    if (this.data === undefined) {
      swal.queue([
        {
          title: 'Please login your account',

        },
      ]);
    } else {
      this.router.navigate(['Examhub/OLevel'], {
        queryParams: {
          data: JSON.stringify(this.data),
        },
      });
    }
  }

  Alevel(): void {
    if (this.data === undefined) {
      swal.queue([
        {
          title: 'Please login your account',

        },
      ]);
    } else {
      this.router.navigate(['Examhub/ALevel'], {
        queryParams: {
          data: JSON.stringify(this.data),
        },
      });
    }
  }

  check(): void {}

  profile(): void {
    const data = [this.email];
    this.router.navigate(['Examhub/User'], {
      queryParams: {
        data: JSON.stringify(data),
      },
    });
  }

  getDataUser(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('get_user_by_id', '1');
    user.append('id', this.userID);

    this.service.getUserByID(user).subscribe(
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

  divicecheck(): void {
    // tslint:disable-next-line:max-line-length
  }

  getnotification(): void {
    const notify = new FormData();
    notify.append('access_key', '6808');
    notify.append('get_notifications', '1');
    notify.append('limit', '20');

    this.service.getNotification(notify).subscribe((res) => {
      const not = res;
      this.notify = not.data.length;
      this.notifi = not.data;
    });
  }

  toggleNotifi(): void {
    const box = document.getElementById('box');

    if (this.down) {
      box.style.height = '0';
      box.style.opacity = '0';
      this.down = false;
    } else {
      box.style.height = '400px';
      box.style.opacity = '1';
      this.down = true;
    }
  }

  logout(): void {
    swal
      .fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to Logout!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('user');
          localStorage.removeItem('expires_at');
          this.router.navigate(['Examhub/Login']);
        }
      });
  }
}
