import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Services/api.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.less']
})
export class EventlistComponent implements OnInit {
  allEvents = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getEvents()
      .subscribe(response => {
        const data = response.json();
        this.allEvents = data;
        console.log(data);
      });
  }

}
