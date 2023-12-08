import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { SdlcComponent } from './sdlc/sdlc.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [SdlcComponent,
    CommonModule,
    RouterOutlet,
    FormComponent,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    NavbarComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
