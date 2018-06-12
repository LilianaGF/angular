import { Component, OnInit } from '@angular/core';
import { Participant } from '../model/participant'
import { ParticipantDataService } from '../participant-data.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit {

  placeholderName: String = "Name:" //Just for property binding

  participant: Participant = new Participant('','','','');
  status: String = ""
  constructor(
    private participantDataService : ParticipantDataService
  ) { }
  ngOnInit() {}
  newHandler(participant: Participant){
    this.participantDataService.putParticipant(participant)
      .subscribe(
        ()=> this.status = "Dato insertado en la DB"
      );
      this.status = "Insertando en la DB"
      this.participant = new Participant('','','','');
  }

}


