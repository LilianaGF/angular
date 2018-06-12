import { Injectable } from '@angular/core';
import { Participant } from './model/participant'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ParticipantDataService {

  urlWebAPI= "http://localhost:49962/api/participants/";
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Allow': 'OPTIONS, GET, POST'
   });
  options = new RequestOptions({ headers: this.headers });
  body = {"initials":"", "name":"", "address":"", "preferredLanguage":""}

  constructor(
    private _http: Http
  ) { }

  getParticipants(): Observable<Participant[]> {
    let observableParticipants = this._http.get(this.urlWebAPI)
        .map((response: Response) => <Participant[]>response.json());
    return observableParticipants;
  }

  getParticipant(initials: String): Observable<Participant> {
    let observableParticipant = 
      this._http.get(this.urlWebAPI + initials)
        .map((response: Response) => <Participant>response.json());
    return observableParticipant;
  }

  putParticipant(participante1: Participant): Observable<any> {   
    this.body = {
      "initials":participante1.initials,
      "name":participante1.name,
      "address":participante1.address,
      "preferredLanguage":participante1.preferredLanguage
    }
    let observableAny = 
      this._http.post(this.urlWebAPI, this.body, this.options)
        .map((response: Response) => response.json());
    return observableAny
  }


  /* HARDCODE, NOW WE HAVE THE HTTP SERVICE
  
  participants: Participant[];

  constructor() {
    this.participants = [];

    const participante1 = new Participant('LGF', 'Liliana Gutiérrez', 'Lejos', 'Java');
    const participante2 = new Participant('AAH', 'Alejandro Arellano', 'Por allí', 'Java');
    const participante3 = new Participant('JLV', 'José Luis Vera', 'Cerca', 'C#');

    this.participants.push(participante1, participante2, participante3); 
  }

  getParticipants(): Participant[] {
    return this.participants;
  }

  putParticipant(participante1: Participant) {
    this.participants.push(participante1);
    console.log(this.participants);
  }
  */

}

