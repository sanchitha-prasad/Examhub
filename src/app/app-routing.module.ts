import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { LeaderBoardComponent } from './pages/leader-board/leader-board.component';
import { LoginComponent } from './pages/login/login.component';
import { AlevelComponent } from './pages/alevel/alevel.component';
import { OlevelComponent } from './pages/olevel/olevel.component';
import { NavBarComponent } from './element/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { GradeSixComponent } from './pages/grade-six/grade-six.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecisionboardComponent } from './pages/decisionboard/decisionboard.component';
import { SignupComponent } from './signup/signup.component';
import { AlquizhubComponent } from './pages/alevel/alquizhub/alquizhub.component';
import { DecistonboardwrongComponent } from './pages/decisionboard/decistonboardwrong/decistonboardwrong.component';
import { CorectanswersComponent } from './pages/corectanswers/corectanswers.component';
import { SixquizhubComponent } from './pages/grade-six/sixquizhub/sixquizhub.component';
import { DesisionboardsixtryComponent } from './pages/grade-six/desisionboardsixtry/desisionboardsixtry.component';
import { DesisionboardsixComponent } from './pages/grade-six/desisionboardsix/desisionboardsix.component';
import { CorectanswesixComponent } from './pages/grade-six/corectanswesix/corectanswesix.component';
import { OlquizhubComponent } from './pages/olevel/olquizhub/olquizhub.component';
import { DesisionboardOlComponent } from './pages/olevel/desisionboard-ol/desisionboard-ol.component';
import { DesisionboardOltryComponent } from './pages/olevel/desisionboard-oltry/desisionboard-oltry.component';
import { CorectanswerOlComponent } from './pages/olevel/corectanswer-ol/corectanswer-ol.component';
import { StatictisComponent } from './pages/statictis/statictis.component';
import { PrograssComponent } from './prograss/prograss.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { RestpasswordComponent } from './pages/restpassword/restpassword.component';
import { VeryfiCodeComponent } from './veryfi-code/veryfi-code.component';




const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'Examhub/GradeSix', component: GradeSixComponent},
{path: 'Examhub/OLevel', component: OlevelComponent},
{path: 'Examhub/ALevel', component: AlevelComponent},
{path: 'Examhub/OlQuizhub', component: OlquizhubComponent},
{path: 'Examhub/610Quizhub', component: SixquizhubComponent},
{path: 'Examhub/Alquizhub', component: AlquizhubComponent},
{path: 'Examhub/Login', component: LoginComponent},
{path: 'Examhub/Learderboard', component: LeaderBoardComponent},
{path: 'Examhub/Decisionboard', component: DecisionboardComponent},
{path: 'Examhub/Decisionboardtry', component: DecistonboardwrongComponent},
{path: 'Examhub/610Decisionboard', component: DesisionboardsixComponent},
{path: 'Examhub/610Decisionboardtry', component: DesisionboardsixtryComponent},
{path: 'Examhub/OlDecisionboard', component: DesisionboardOlComponent},
{path: 'Examhub/OlDecisionboardtry', component: DesisionboardOltryComponent},
{path: 'Examhub/User', component: UserprofileComponent},
{path: 'Examhub/Signup', component: SignupComponent},
{path: 'Examhub/CorrectAnswer', component: CorectanswersComponent},
{path: 'Examhub/610CorrectAnswer', component: CorectanswesixComponent},
{path: 'Examhub/OlCorrectAnswer', component: CorectanswerOlComponent},
{path: 'Examhub/Statistics', component: StatictisComponent},
{path: 'Examhub', component: PrograssComponent},
{path: 'Examhub/ForgotPasssword', component: ForgotpasswordComponent},
{path: 'Examhub/resetPasssword', component: RestpasswordComponent},
{path: 'Examhub/confirmCode', component: VeryfiCodeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
