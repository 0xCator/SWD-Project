import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SDLCComponent } from './sdlc/sdlc.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { InitiationPhaseComponent } from './sdlc/initiation-phase/initiation-phase.component';
import { RequirementPhaseComponent } from './sdlc/requirement-phase/requirement-phase.component';
import { DesignPhaseComponent } from './sdlc/design-phase/design-phase.component';

@NgModule({
  declarations: [
    AppComponent,
    SDLCComponent,
    AllFilesComponent,
    InitiationPhaseComponent,
    RequirementPhaseComponent,
    DesignPhaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
