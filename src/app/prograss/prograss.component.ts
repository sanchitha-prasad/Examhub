import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-prograss',
  templateUrl: './prograss.component.html',
  styleUrls: ['./prograss.component.css']
})
export class PrograssComponent implements OnInit {
  userID: string;
  user: any;
  urllink: any;
  data: any;

  constructor( private Serviceservice: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {

      this.data = JSON.parse(params.data);



    });
    this.userID = sessionStorage.getItem('userId');
    this.getDataUser();

    setTimeout(() => {  this.router.navigate([''], { queryParams: {data: JSON.stringify(this.data) }});
     }, 6000);
  }
  getDataUser(): void{
    this.userID = sessionStorage.getItem('userId');
    const user = new FormData();
    user.append('access_key', '6808');
    user.append('get_user_by_id', '1');
    user.append('id', this.userID);

    this.Serviceservice.getUserByID(user).subscribe((res => {

      const users = res;
      this.user = users.data.name;

      this.urllink = users.data.profile;

      if (users.data.profile === ''){
        this.urllink = '../../../assets/userr1.png';
      }


    }), (err) => {


    });

  }
}
