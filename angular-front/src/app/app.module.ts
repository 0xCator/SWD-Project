import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SDLCComponent } from './sdlc/sdlc.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { SDLCModule } from "./sdlc/sdlc.module";
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { ApolloModule, Apollo } from 'apollo-angular';





const appRoutes: Routes = [
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
    bootstrap: [
        AppComponent,
        SDLCComponent,
        AllFilesComponent,        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SDLCModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        GraphQLModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
})
export class AppModule { }
