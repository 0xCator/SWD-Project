import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
declarations: [
    AppComponent,
    FormComponent,
],
    imports:[
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],

    bootstrap:[AppComponent]
})
export class AppModule {}
