import { Component, OnInit} from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActComponent } from '../act/act.component';
import { AboutComponent } from '../about/about.component';
import { Meetup } from '../meetup.model';
import { MeetupService } from '../meetup.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss'],
  providers: [MeetupService]
})
export class VolunteerComponent implements OnInit {

  meetups: FirebaseListObservable<any[]>;

  constructor(private router: Router, private meetupService: MeetupService){}

  ngOnInit(){
    this.meetups = this.meetupService.getVolunteer();
  }

}
