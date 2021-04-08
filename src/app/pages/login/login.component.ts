import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data = 'sdsdsds';
  isSignedIn = false;
  closeResult: string;
  constructor(
    private tostar: ToastrService,
    public service: ServiceService,
    private router: Router,
    public firbase: AngularFireAuth,
    private modalService: NgbModal
  ) {}
  @Output() event = new EventEmitter<string>();
  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  async onsignin(email: string, password: string) {
    console.log("run method");
    await this.service
      .signin(email, password)
      .then((res) => {
        const mail = email;
        console.log("run - " + res);

        const user = new FormData();
        user.append('access_key', '6808');
        user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
        user.append('user_signup', '1');
        user.append('name', '');
        user.append('email', email);
        user.append('profile', '');
        user.append('mobile', '0');
        user.append('type', 'email');
        user.append('fcm_id', '');
        user.append('refer_code', '0');
        user.append('friends_code', '0');
        user.append('ip_address', '0');
        user.append('status', '1');
        this.service.signup(user).subscribe(
          (event) => {
            const userdetails = [event.data.name];
            sessionStorage.setItem('userId', event.data.user_id);
            this.router.navigate(['Examhub'], {
              queryParams: {
                data: JSON.stringify(userdetails),
              },
            });
          },
          (err) => {
              console.log(err);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        this.tostar.error(errorMessage);
      });
  }

  // tslint:disable-next-line:typedef

  regster(): void {
    this.router.navigate(['Examhub/Signup']);
  }
  forgot(): void {
    this.router.navigate(['Examhub/ForgotPasssword']);
  }
  openVerticallyCentered(content): void {
    this.modalService.open(content, { centered: true });
  }
  back(): void{
    this.router.navigate(['']);
  }
}
