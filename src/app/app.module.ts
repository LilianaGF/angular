import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { NameListComponent } from './name-list/name-list.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { ParticipantDataService } from './participant-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    ParticipantFormComponent,
    NameListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ParticipantDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



