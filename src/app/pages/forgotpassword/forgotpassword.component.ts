import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  constructor(public firbase: AngularFireAuth, private tostar: ToastrService) {}

  ngOnInit(): void {}
  resetPassword(email): void {
    if (email !== '') {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {



        this.firbase
          .sendPasswordResetEmail(email)
          .then(() => {
            document.getElementById('message-box1').style.display = 'block';
            document.getElementById('error').style.display = 'none';
            document.getElementById('message-box').style.display = 'none';
            document.getElementById('messagedone').innerHTML =
              ' Sent Reset Email check your Email Account';
          })
          .catch((error) => this.tostar.error(error.code));
      } else {
        document.getElementById('error').style.display = 'none';
        document.getElementById('message-box').style.display = 'block';
        document.getElementById('message').innerHTML =
          'You have entered an invalid email address!';
      }
    } else {
      document.getElementById('error').innerHTML =
        'please enter email address!';
    }
  }
}
