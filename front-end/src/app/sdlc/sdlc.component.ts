import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { FormComponent } from '../form/form.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sdlc',
  standalone:true,
  imports: [CommonModule, MatCardModule, MatIconModule,FormComponent, MatSelectModule, MatButtonModule, MatFormFieldModule, MatTableModule],
  templateUrl: './sdlc.component.html',
  styleUrl: './sdlc.component.css'
})
export class SdlcComponent implements OnInit{
  docForm = false
  constructor(private sc: SharedService) {}
  cardList = [
    { title: 'Card 1' },
    { title: 'Card 2' },
    { title: 'Card 3' },
  ];
  ngOnInit(): void {
    this.sc.sharedVariable$.subscribe((value)=>{
      this.docForm = value;
    })
  }

  cardClicked(card: any) {
    console.log(card);
  }
  createDoc(){
    this.docForm= true;
  }

}
