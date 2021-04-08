
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarComponent } from 'src/app/element/nav-bar/nav-bar.component';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  data: any;
  user: any;
  name: any;
  email: any;
  mobile: any;
  urllink = '../../../assets/userr1.png';
  fileuupload: File = null;
  profile: any;
  id1: any;
  id3: any;
  id2: any;
  userID: string;
  constructor(
    private router: Router,
    private Service: ServiceService,
    private route: ActivatedRoute
  ) {}
  loadComponents = NavBarComponent;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
    });


    this.userID = sessionStorage.getItem('userId');
    this.getDataUser();
    this.getdatasAl();
    this.getdatasOl();
    this.getdatasSix();
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
  modal(): void {
    const show = document.getElementById('input');
    show.style.display = 'block';
    document.getElementById('modl1').style.display = 'none';
    document.getElementById('in').style.display = 'none';
    document.getElementById('update').style.display = 'block';
  }
  modal1(): void {
    const show = document.getElementById('input1');
    show.style.display = 'block';
    document.getElementById('modl').style.display = 'none';
    document.getElementById('ins').style.display = 'none';
    document.getElementById('update').style.display = 'block';
  }

  selectImage(event): void {
    const file = document.getElementById('file');
    file.click();

    file.addEventListener('change', () => {
      if (event.target.files) {
        const reader = new FileReader();
        this.fileuupload = event.target.files[0] as File;
        reader.readAsDataURL(this.fileuupload);
        // tslint:disable-next-line:no-shadowed-variable
        reader.onload = (event: any) => {
          this.urllink = event.target.result;
          this.uplod();
        };
      }
    });
  }

  getdatasSix(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.data[0]);
    user.append('profile', '');
    user.append('mobile', '0');
    user.append('type', 'gmail');
    user.append('fcm_id', '');
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.Service.signupSix(user).subscribe(
      (event) => {
        this.id1 = event.data.user_id;
      },
      (err) => {

      }
    );
  }

  getdatasOl(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.data[0]);
    user.append('profile', '');
    user.append('mobile', '0');
    user.append('type', 'gmail');
    user.append('fcm_id', '');
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.Service.signupOl(user).subscribe(
      (event) => {
        this.id2 = event.data.user_id;
      },
      (err) => {

      }
    );
  }

  getdatasAl(): void {
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', '');
    user.append('email', this.data[0]);
    user.append('profile', '');
    user.append('mobile', '0');
    user.append('type', 'gmail');
    user.append('fcm_id', '');
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.Service.signup(user).subscribe(
      (event) => {
        this.id3 = event.data.user_id;
      },
      (err) => {

      }
    );
  }

  uplod(): void {
    this.gradeAlProfile();
    this.gradesOlProfile();
    this.gradesixProfile();
  }

  gradesixProfile(): void {
    const image = new FormData();
    image.append('access_key', '6808');
    image.append('upload_profile_image', '1');
    image.append('user_id', this.id1);
    image.append('image', this.fileuupload);

    this.Service.updateProfileImgSix(image).subscribe(
      (res) => {},
      (err) => {

      }
    );
  }

  gradesOlProfile(): void {
    const image = new FormData();
    image.append('access_key', '6808');
    image.append('upload_profile_image', '1');
    image.append('user_id', this.id2);
    image.append('image', this.fileuupload);

    this.Service.updateProfileImgOl(image).subscribe(
      (res) => {},
      (err) => {

      }
    );
  }
  gradeAlProfile(): void {
    const image = new FormData();
    image.append('access_key', '6808');
    image.append('upload_profile_image', '1');
    image.append('user_id', this.id3);
    image.append('image', this.fileuupload);

    this.Service.updateProfileImg(image).subscribe(
      (res) => {},
      (err) => {

      }
    );
  }

  updateDetails(name, mobile): void {
    this.updateDetailsSix(name, mobile);
    this.updateDetailsOl(name, mobile);
    this.updateDetailsAl(name, mobile);
  }

  updateDetailsSix(name, mobile): void {
    const profile = new FormData();
    profile.append('access_key', '6808');
    profile.append('update_profile', '1');
    profile.append('email', this.email);
    profile.append('name', name.value);
    profile.append('mobile', mobile.value);

    this.Service.updateProfile(profile).subscribe(
      (res) => {
        this.reset();
      },
      (err) => {

      }
    );
  }

  updateDetailsOl(name, mobile): void {
    const profile = new FormData();
    profile.append('access_key', '6808');
    profile.append('update_profile', '1');
    profile.append('email', this.email);
    profile.append('name', name.value);
    profile.append('mobile', mobile.value);

    this.Service.updateProfileOL(profile).subscribe(
      (res) => {

        this.reset();
      },
      (err) => {

      }
    );
  }
  updateDetailsAl(name, mobile): void {
    const profile = new FormData();
    profile.append('access_key', '6808');
    profile.append('update_profile', '1');
    profile.append('email', this.email);
    profile.append('name', name.value);
    profile.append('mobile', mobile.value);

    this.Service.updateProfileAL(profile).subscribe(
      (res) => {
        this.reset();
      },
      (err) => {

      }
    );
  }

  reset(): void {
    location.reload();
  }
  home(): void {
    const data = ['', this.data[0][1]];
    this.router.navigate([''], {
      queryParams: {
        data: JSON.stringify(data),
      },
    });
  }
}
