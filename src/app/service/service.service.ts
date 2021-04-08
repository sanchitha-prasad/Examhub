import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GetCategories} from '../model/getCategories.model';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { stringify } from '@angular/compiler/src/util';
import { Form } from '@angular/forms';
import { data } from 'jquery';
import { SystemException } from 'igniteui-angular-core';
// import { db } from '../api/db.php';
// declare var db: any;AngularFireAuth

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public storagename = 'ExameHubdb';
  isLoggedIn = false;



    DBurl = 'https://examhub.mobilehub.lk/API/db.php';
    DBurl1 = 'https://examhub.mobilehub.lk/API/inser.php';
    DBurluodate = 'https://examhub.mobilehub.lk/API/update.php';
     SERVICE = 'https://altemp.examhub.lk/api-v2.php';
    //  SERVICE = 'https://al.examhub.lk/api-v2.php';
     gradesix = 'https://610temp.examhub.lk/api-v2.php';
    //  gradesiximg = 'https://610.examhub.lk/api-v2.php';
    //  OL = 'https://App.examhub.lk/api-v2.php';
    OL = 'https://oltemp.examhub.lk/api-v2.php';
     Subscripton = 'https://api.examhub.lk/subscribe';
     OTP = 'https://api.examhub.lk/verify';
     Mobitel = 'https://api.examhub.lk/mobi';
     OtpMobiel = 'https://api.examhub.lk/mobiverify';
      // alCategories: GetCategories;
       constructor( private httpClient: HttpClient, public firbase: AngularFireAuth) { }

      //  httpOption = new HttpHeaders({
      //   Authorization: 'sanchitha' + localStorage.getItem('token'),
      //   'Access-Control-Allow-Origin': '*',

      //   userid: '1'
      // });

      //  jwtBearerToken = jwt.sign({
      //   algorithm: 'HS256',
      //   expiresIn: new Date().getTime(),
      //   issuer: 'quiz',
      //   subject: 'quiz Authentication'
      // });


    //   jwtBearerToken = jwt.sign({
    //     algorithm: 'HS256',
    //     expiresIn: new Date().getTime(),
    //     issuer: 'quiz',
    //     subject: 'quiz Authentication',
    //  }, 'set_your_strong_jwt_secret_key', { algorithm: 'RS256' },
    //  // tslint:disable-next-line:only-arrow-functions
    //  // tslint:disable-next-line:typedef
    //  (err, token) => {
    //     console.log(token);
    //   });


       httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ',
          'Content-Type': 'application/json',

        }),

      };
      //  login

      // tslint:disable-next-line:typedef
      async signin(email: string, password: string ){
        await this.firbase.signInWithEmailAndPassword(email, password)
        .then(res => {
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(res.user));


        });

      }

      // signup

      // tslint:disable-next-line:typedef
      DialogSubscription(subscriberId): Observable<any>{
        return this.httpClient.post(this.Subscripton, subscriberId);

      }
      OtpSend(Otp): Observable<any>{
        return this.httpClient.post(this.OTP, Otp);

      }
      mobitelSubscription(subscriberId): Observable<any>{
        return this.httpClient.post(this.Mobitel, subscriberId);
      }
      OtpSendMobitel(Otp): Observable<any>{
        return this.httpClient.post(this.OtpMobiel, Otp);

      }

  signup(user): Observable<any>{
        return this.httpClient.post<any>(this.SERVICE, user
      );
  }
  // tslint:disable-next-line:typedef
  testupdate(data: FormData){
    return this.httpClient.post(this.SERVICE, data);
  }

  // tslint:disable-next-line:typedef
  getSubcategory(sub: FormData){
    return this.httpClient.post(this.SERVICE, sub);
  }

  // tslint:disable-next-line:typedef
  getquestion(quiz: FormData){
    return this.httpClient.post(this.SERVICE, quiz);
  }

  // tslint:disable-next-line:typedef
  levelbyQuestion(levelQuiz: FormData) {
    return this.httpClient.post(this.SERVICE, levelQuiz);
  }

  // tslint:disable-next-line:typedef
  addata(value: FormData): Observable<any>{
     return this.httpClient.post<any>(this.DBurl1, value );

}
update(va: FormData): Observable<any>{
  return this.httpClient.post<any>(this.DBurluodate, va );
}

getdata(getdata): Observable<any>{
  return this.httpClient.post<any>(this.DBurl, getdata );
}


// grade six
getcategorySix(value: FormData): Observable<any>{
  return this.httpClient.post<any>(this.gradesix, value  );
}
// tslint:disable-next-line:typedef
getquestionsix(level: FormData) {
  return this.httpClient.post(this.gradesix, level);
}
// tslint:disable-next-line:typedef
levelbyQuestionsix(levelQuiz: FormData) {
  return this.httpClient.post(this.gradesix, levelQuiz);
}

// tslint:disable-next-line:typedef
addataxix(value: FormData): Observable<any>{
   return this.httpClient.post<any>(this.DBurl1, value );

}
updatesix(va: FormData): Observable<any>{
return this.httpClient.post<any>(this.DBurluodate, va );
}

getdatasix(getdata): Observable<any>{
return this.httpClient.post<any>(this.DBurl, getdata );
}



// ol

// tslint:disable-next-line:typedef
testupdateOl(up: FormData){
  return this.httpClient.post(this.OL, up);
}
getcategoryOl(value: FormData): Observable<any>{
  return this.httpClient.post<any>(this.OL, value );
}
// tslint:disable-next-line:typedef
getquestionOl(level: FormData) {
  return this.httpClient.post(this.OL, level);
}
// tslint:disable-next-line:typedef
levelbyQuestionOl(levelQuiz: FormData) {
  return this.httpClient.post(this.OL, levelQuiz);
}

// tslint:disable-next-line:typedef
addataOl(value: FormData): Observable<any>{
   return this.httpClient.post<any>(this.DBurl1, value );

}
updateOl(va: FormData): Observable<any>{
return this.httpClient.post<any>(this.DBurluodate, va );
}

getdataOl(getdata): Observable<any>{
return this.httpClient.post<any>(this.DBurl, getdata );
}

// get user
getUserByID(value: FormData): Observable<any>{
  return this.httpClient.post<any>(this.SERVICE, value);
  }

  updateProfile(profile: FormData): Observable<any>{
    return this.httpClient.post<any>(this.gradesix, profile);
  }
  updateProfileOL(profile: FormData): Observable<any>{
    return this.httpClient.post<any>(this.OL, profile);
  }
  updateProfileAL(profile: FormData): Observable<any>{
    return this.httpClient.post<any>(this.SERVICE, profile);
  }

  updateProfileImg(image: FormData): Observable<any>{
    return this.httpClient.post<any>(this.SERVICE, image);
  }

  updateProfileImgSix(image: FormData): Observable<any>{
    return this.httpClient.post<any>(this.gradesix, image);
  }
  updateProfileImgOl(image: FormData): Observable<any>{
    return this.httpClient.post<any>(this.OL, image);
  }


  // leader Board
  LaraderBoardAl(leader: FormData): Observable<any>{
    return this.httpClient.post<any>(this.SERVICE, leader);
  }

  LaraderBoardOl(leader: FormData): Observable<any>{
    return this.httpClient.post<any>(this.OL, leader);
  }
  LaraderBoard610(leader: FormData): Observable<any>{
    return this.httpClient.post<any>(this.gradesix, leader);
  }


  setMonthlyLeaderboardAl(score: FormData): Observable<any>{
    return this.httpClient.post<any>(this.SERVICE, score);
  }

  setMonthlyLeaderboardOl(score: FormData): Observable<any>{
    return this.httpClient.post<any>(this.OL, score);
  }

  setMonthlyLeaderboardSix(score: FormData): Observable<any>{
    return this.httpClient.post<any>(this.gradesix, score);
  }


  signupOl(user): Observable<any>{
    return this.httpClient.post<any>(this.OL, user );
}

signupSix(user): Observable<any>{
  return this.httpClient.post<any>(this.gradesix, user );
}


// setstatics
setStaticsAL(statics): Observable<any>{
  return this.httpClient.post<any>(this.SERVICE, statics );
}



getStaticsAL(statics): Observable<any>{
  return this.httpClient.post<any>(this.SERVICE, statics );
}

getStaticsOL(statics): Observable<any>{
  return this.httpClient.post<any>(this.OL, statics );
}
getStaticsSix(statics): Observable<any>{
  return this.httpClient.post<any>(this.gradesix, statics );
}

setStaticsSix(statics): Observable<any>{
  return this.httpClient.post<any>(this.gradesix, statics );
}

setStaticsOL(statics): Observable<any>{
  return this.httpClient.post<any>(this.OL, statics );
}

getNotification(notify): Observable<any>{
  return this.httpClient.post<any>(this.OL, notify );
}



}
