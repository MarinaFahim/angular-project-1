import {Component} from '@angular/core';
import {eventsData} from "../eventsData";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events = [...eventsData];


  share() {
    window.alert('The event has been shared!');
  }

  onNotify() {
    window.alert('You\'re buying one ticket...');
  }
}
