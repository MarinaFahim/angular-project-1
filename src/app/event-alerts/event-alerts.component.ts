import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventData} from "../eventsData";

@Component({
  selector: 'app-event-alerts',
  templateUrl: './event-alerts.component.html',
  styleUrl: './event-alerts.component.css'
})
export class EventAlertsComponent {
  @Input() event: EventData | undefined;
  @Output() notify = new EventEmitter();
}
