import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.css']
})
export class RestpasswordComponent implements OnInit {
  data: any;
  code: any;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router,  private tostar: ToastrService) {}


  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    const mode = this.route.snapshot.queryParams['mode'];
    // tslint:disable-next-line:no-string-literal
    this.code = this.route.snapshot.queryParams['oobCode'];



}
  resetPassword(password, confirmPassword): void {
    if (password !== confirmPassword) {
     this.tostar.error('passwords does not match');


  }
  else {
    this.afAuth.confirmPasswordReset(this.code, password)
  .then(() =>  {
    document.getElementById('loading').style.display ='block';
    setTimeout(() => {
                        this.tostar.success('password reset succeed');

                        this.router.navigate(['Examhub/Login']); }, 3000);

                })
  .catch(err => {
   const errorMessage = err.code; // check this helper class at the bottom
   this.tostar.error(errorMessage);
  });


  }
}
}
