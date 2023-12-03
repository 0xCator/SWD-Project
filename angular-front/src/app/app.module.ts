import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SDLCComponent } from './sdlc/sdlc.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { SDLCModule } from "./sdlc/sdlc.module";
import { FormsModule } from '@angular/forms';

;

const appRoutes: Routes = [
    {path: "", component: SDLCComponent},
    {path: "sdlc", component: SDLCComponent},
    {path: "all-files", component: AllFilesComponent},
]
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
        SDLCModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],
})
export class AppModule { }
