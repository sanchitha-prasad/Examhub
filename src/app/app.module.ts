import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './element/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GradeSixComponent } from './pages/grade-six/grade-six.component';
import { OlevelComponent } from './pages/olevel/olevel.component';
import { AlevelComponent } from './pages/alevel/alevel.component';
import { LoginComponent } from './pages/login/login.component';
import { LeaderBoardComponent } from './pages/leader-board/leader-board.component';
import { DecisionboardComponent } from './pages/decisionboard/decisionboard.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceService } from './service/service.service';
import { AlquizhubComponent } from './pages/alevel/alquizhub/alquizhub.component';
import {ProgressBarModule} from 'angular-progress-bar';
import { DecistonboardwrongComponent } from './pages/decisionboard/decistonboardwrong/decistonboardwrong.component';
import { CorectanswersComponent } from './pages/corectanswers/corectanswers.component';
import * as $ from 'jquery';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { SixquizhubComponent } from './pages/grade-six/sixquizhub/sixquizhub.component';
import { DesisionboardsixComponent } from './pages/grade-six/desisionboardsix/desisionboardsix.component';
import { DesisionboardsixtryComponent } from './pages/grade-six/desisionboardsixtry/desisionboardsixtry.component';
import { CorectanswesixComponent } from './pages/grade-six/corectanswesix/corectanswesix.component';
import { CorectanswerOlComponent } from './pages/olevel/corectanswer-ol/corectanswer-ol.component';
import { DesisionboardOltryComponent } from './pages/olevel/desisionboard-oltry/desisionboard-oltry.component';
import { DesisionboardOlComponent } from './pages/olevel/desisionboard-ol/desisionboard-ol.component';
import { OlquizhubComponent } from './pages/olevel/olquizhub/olquizhub.component';

import {FormsModule, NgForm} from '@angular/forms';
import { StatictisComponent } from './pages/statictis/statictis.component';
import { IgxDoughnutChartModule } from 'igniteui-angular-charts';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ToastrModule} from 'ngx-toastr';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PrograssComponent } from './prograss/prograss.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { RestpasswordComponent } from './pages/restpassword/restpassword.component';
import { VeryfiCodeComponent } from './veryfi-code/veryfi-code.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    GradeSixComponent,
    OlevelComponent,
    AlevelComponent,
    LoginComponent,
    LeaderBoardComponent,
    DecisionboardComponent,
    UserprofileComponent,
    SignupComponent,
    AlquizhubComponent,
    DecistonboardwrongComponent,
    CorectanswersComponent,
    SixquizhubComponent,
    DesisionboardsixComponent,
    DesisionboardsixtryComponent,
    CorectanswesixComponent,
    CorectanswerOlComponent,
    DesisionboardOltryComponent,
    DesisionboardOlComponent,
    OlquizhubComponent,
    StatictisComponent,
    PrograssComponent,
    ForgotpasswordComponent,
    RestpasswordComponent,
    VeryfiCodeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlickCarouselModule,
    NgCircleProgressModule.forRoot(),
    IgxDoughnutChartModule,
    ToastrModule.forRoot(),
    ProgressBarModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    NgxSpinnerModule,

    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter,
    //     allowedDomains: ['example.com'],
    //   },
    // }),
    NgbPaginationModule, NgbAlertModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q',
      authDomain: 'examhub-auth.firebaseapp.com',
      projectId: 'examhub-auth',
      storageBucket: 'examhub-auth.appspot.com',
      messagingSenderId: '374164446761',
      appId: '1:374164446761:web:a37daa65e6db65c3a60638'
    })

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  entryComponents: [GradeSixComponent]
})
export class AppModule { }
