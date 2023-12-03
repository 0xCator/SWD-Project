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
import { InitiationPhaseComponent } from './sdlc/initiation-phase/initiation-phase.component';
import { DesignPhaseComponent } from './sdlc/design-phase/design-phase.component';
import { RequirementPhaseComponent } from './sdlc/requirement-phase/requirement-phase.component';
import { FormListComponent } from './sdlc/form-list/form-list.component';

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
    bootstrap: [
        AppComponent,
        SDLCComponent,
        AllFilesComponent,
        InitiationPhaseComponent,
        DesignPhaseComponent,
        RequirementPhaseComponent,
        FormListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SDLCModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        GraphQLModule,
        HttpClientModule,
    ],
})
export class AppModule { }
