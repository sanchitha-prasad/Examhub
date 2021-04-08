import { GradeSixComponent } from '../../pages/grade-six/grade-six.component';
import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { HomeComponent } from '../../pages/home/home.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
  loadComponents = HomeComponent ;
  ngOnInit(): void {

  }

// tslint:disable-next-line:typedef
btntoggle(){
    if ($('.item').hasClass('active')) {
      $('.item').removeClass('active');
  } else {
      $('.item').addClass('active');
  }
  }


}
