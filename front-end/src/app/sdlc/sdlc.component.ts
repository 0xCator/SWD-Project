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
import { Document } from '../models/document.module';
import { DisplayFormsComponent } from '../display-forms/display-forms.component';

@Component({
  selector: 'app-sdlc',
  standalone:true,
  imports: [CommonModule, MatCardModule, MatIconModule,FormComponent, MatSelectModule, MatButtonModule, MatFormFieldModule, MatTableModule, DisplayFormsComponent],
  templateUrl: './sdlc.component.html',
  styleUrl: './sdlc.component.css'
})
export class SdlcComponent implements OnInit{
  docForm = false
  displayForm = false
  docList!: Document[]
  constructor(private sc: SharedService) {
    this.docList = [];
    this.docList.length = 0;
  }

  ngOnInit(): void {
    this.sc.sharedDocForm.subscribe((value)=>{
      this.docForm = value;
    })
    this.sc.sharedDoc.subscribe((value)=>{
      this.docList.push(value);
    })
    this.sc.sharedDisplayedForm.subscribe((value)=>{
      this.displayForm = value;
    })
  }

  cardClicked(doc: Document) {
    this.sc.updateDocView(doc);
  }
  
  createDoc(){
    this.docForm= true;
  }

  isObjectEmpty(obj: Document): boolean {
    return Object.keys(obj).length === 0;
  }

  showFormDetails(){
    this.displayForm = true;
  }  
}
