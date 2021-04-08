import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-veryfi-code',
  templateUrl: './veryfi-code.component.html',
  styleUrls: ['./veryfi-code.component.css']
})
export class VeryfiCodeComponent implements OnInit {

  constructor(public service: ServiceService,
              public firbase: AngularFireAuth,
              private tostar: ToastrService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }
  goback(): void {
    this.router.navigate(['Examhub/Signup']);
  }



}
