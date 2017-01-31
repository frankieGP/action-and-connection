import { Component, OnInit } from '@angular/core';
import { ActComponent } from '../act/act.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { ConnectComponent } from '../connect/connect.component';
import { AboutComponent } from '../about/about.component';
import { DataService } from '../data.service'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  data;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(function(response){
      this.dataService.setData(response.json());
    });
    console.log(this.data);
    console.log("hello");
  }

}
