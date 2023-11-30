import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SDLCComponent } from './sdlc/sdlc.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { InitiationPhaseModule } from "./sdlc/sdlc.module";

;

@NgModule({
    declarations: [
        AppComponent,
        SDLCComponent,
        AllFilesComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InitiationPhaseModule
    ]
})
export class AppModule { }
