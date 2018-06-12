import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ParticipantDataService } from '../participant-data.service';
import { Participant } from '../model/participant';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  @Output()outParticipant: EventEmitter<Participant> = new EventEmitter<Participant>();
  /* */
  participants: Participant[];

  clickParticipant: Participant;

  selectedParticipant: Participant;
  initialsOfSelectedParticipant: String = "LGF"

  /*
  private participantDataService: ParticipantDataService;
  
  constructor( participantDataService : ParticipantDataService) { 
    this.participantDataService = participantDataService;
    this.participants = this.participantDataService.getParticipants();
  }
  ngOnInit() { }
  */

  constructor(
    private participantDataService : ParticipantDataService
  ) { }

  /* ANTES DEL SERVICIO HTTP
  ngOnInit() {
    this.participants = this.participantDataService.getParticipants();
  }
  */

  ngOnInit() {
    this.participantDataService.getParticipants()
      .subscribe((participantsData)=>this.participants = participantsData);
    
    this.participantDataService.getParticipant(this.initialsOfSelectedParticipant)
      .subscribe((participantData)=>this.selectedParticipant = participantData);

  }


  clickParticipantHandler(participant){
    this.outParticipant.emit(participant);
    this.clickParticipant = participant;
  }

}




