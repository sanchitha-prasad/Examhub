import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VeryfiCodeComponent } from '../veryfi-code/veryfi-code.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class SignupComponent implements OnInit {
  isSignedUp = false;
  isLoggedIn = false;
  isLoading = false;
  referenceNo: any;
  // tslint:disable-next-line:max-line-length
  constructor(
    public service: ServiceService,
    public firbase: AngularFireAuth,
    private tostar: ToastrService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line:no-non-null-assertion
    if (localStorage.getItem('user')! == null) {
      this.isSignedUp = true;
    } else {
      this.isSignedUp = false;
    }
  }
 // tslint:disable-next-line:typedef


  // tslint:disable-next-line:typedef
  async signup(

               name: string,
               email: string,
               password: string,
               repassword: string,
               phone: string,
               content
  ) {

    if (!name) {
      this.tostar.error('Please complete the Name ');
      return false;
    }
    if (!password) {
      this.tostar.error('Please complete the Password');
      return false;
    }
    if (!email) {
      this.tostar.error('Please complete the Email');
      return false;
    }
    if (!phone) {
      this.tostar.error('Please complete the Contact Number');
      return false;
    }


    if (password !== repassword) {
      this.tostar.error('No match password');
      document.getElementById('re').style.color = 'red';
      return false;
    } else {
      document.getElementById('re').style.color = 'green';
    }
    if (password.length < 6){
        this.tostar.error('Password should be at least 6 characters');
      }
      else{

      if (phone.startsWith('077')){
        console.log('dialog');

        const Phoneori = phone.replace('0', 'tel:94');
        const subscription = {
          subscriberId: Phoneori
        };
        this.service.DialogSubscription(subscription).subscribe(
              (event: any) => {
                if (event.statusCode === 'S1000'){
                this.tostar.success(event.statusDetail);
                this.referenceNo = event.referenceNo;
                this.modalService.open(content, { centered: true });
                }
                else{
                  this.tostar.error(event.statusDetail);
                }

              },
              (err) => {
                console.log(err);
                this.tostar.error(err);
              }
            );
      }
      else{
        console.log('mobitel');
        const Phoneori = phone.replace('0', 'tel:94');
        const subscription = {
          subscriberId: Phoneori
        };
        this.service.mobitelSubscription(subscription).subscribe(
              (event: any) => {
                if (event.statusCode === 'S1000'){
                this.tostar.success(event.statusDetail);
                this.modalService.open(content, { centered: true });
                this.referenceNo = event.referenceNo;
                }
                else{
                  this.tostar.error(event.statusDetail);
                }

              },
              (err) => {
                console.log(err);
                this.tostar.error(err);
              }
            );
      }

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 3000);




  }
}
// tslint:disable-next-line:typedef
async verification( name: string,
                    email: string,
                    password: string,
                    repassword: string,
                    phone: string,
                    otpCode: string,
                    content){

                      const Otp = {
                        otp: otpCode,
                      referenceNo: this.referenceNo

                      };

                      if (phone.startsWith('077')){
                        console.log('dialog');

                        this.service.OtpSend(Otp).subscribe(
                        async (event: any) => {
                          if (event.statusCode === 'S1000'){
                            this.tostar.success(event.statusDetail);
                            this.submited(name,
                              email,
                              password,
                              repassword,
                              phone,
                              );
                            this.modalService.dismissAll(content);

                          }
                          else{
                            this.tostar.error(event.statusDetail);
                          }



                        },
                        (err) => {
                          console.log(err);
                          this.tostar.error(err.statusDetail);
                        }
                      );
                      }
                      else{
                        console.log(Otp);

                        console.log('mobitel');
                        this.service.OtpSendMobitel(Otp).subscribe(
                          async (event: any) => {
                            if (event.statusCode === 'S1000'){
                              this.tostar.success(event.statusDetail);
                              this.submited(name,
                                email,
                                password,
                                repassword,
                                phone,
                                );
                              this.modalService.dismissAll(content);
                            }
                            else{
                              this.tostar.error(event.statusDetail);
                            }
                          },
                          (err) => {
                            console.log(err);
                            this.tostar.error(err.statusDetail);
                          }
                        );
                      }

}

login(): void {
    this.router.navigate(['Examhub/Login']);
  }

// tslint:disable-next-line:typedef
async submited(name, email, password, repassword, phone){
await this.firbase
  .createUserWithEmailAndPassword(email, password)
  .then((res) => {
    this.isLoggedIn = true;
    localStorage.setItem('user', JSON.stringify(res.user));

    const user = new FormData();
    user.append('access_key', '6808');
    user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
    user.append('user_signup', '1');
    user.append('name', name);
    user.append('email', email);
    user.append('profile', '');
    user.append('mobile', String(phone));
    user.append('type', 'email');
    user.append('fcm_id', res.user.uid);
    user.append('refer_code', '0');
    user.append('friends_code', '0');
    user.append('ip_address', '0');
    user.append('status', '1');
    this.service.signup(user).subscribe(
      (re) => {},
      (err) => {}
    );

    this.service.signupOl(user).subscribe(
      (re) => {},
      (err) => {}
    );

    this.service.signupSix(user).subscribe(
      (re) => {},
      (err) => {}
    );

    this.tostar.success('Register Completed');
    this.router.navigate(['Examhub/Login']);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.tostar.error(errorMessage);
  });
}
}
