import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../model/participant';
import { NameListComponent } from '../name-list/name-list.component';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  fromChildParticipant: Participant;

  constructor() {
    this.fromChildParticipant = new Participant ('','','','');
   }

  fromChildParticiantHandler(fromChildParticipant){
    this.fromChildParticipant = fromChildParticipant;
   }

  ngOnInit() {
  }

}


