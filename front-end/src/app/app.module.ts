import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import { SdlcComponent } from './sdlc/sdlc.component'
import {NavbarComponent} from './navbar/navbar.component'

@NgModule({
declarations: [
    AppComponent,
    FormComponent,
    SdlcComponent,
    NavbarComponent
],
    imports:[
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
    ],

    bootstrap:[AppComponent]
})
export class AppModule {}
