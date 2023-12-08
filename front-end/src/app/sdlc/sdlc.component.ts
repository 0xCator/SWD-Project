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
import { Apollo } from 'apollo-angular';
import { GET_ALL_DOC } from '../graphQL/query';
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
  update = false;
  displayForm = false
  doc:Document = new Document();
  docList: Document[]= [];
  isCreateForm: boolean = false;
  constructor(private sc: SharedService, private apollo: Apollo) {}


  ngOnInit(): void {
    this.sc.sharedDocForm.subscribe((value)=>{
      this.docForm = value;
    })
    this.sc.sharedDisplayedForm.subscribe((value)=>{
      this.displayForm = value;
    })

    setInterval(()=>{
    this.apollo.query<any>({
      query: GET_ALL_DOC
    }).subscribe(({data})=>{
      this.docList = data.getAllDocuments ;
    })
    }, 300)

  }


  cardClicked(doc: Document) {
    console.log(doc)
    this.sc.updateDocView(doc);
    this.sc.updateDisplay(true)
  }

  createDoc(){
    this.sc.updatePhase("")
    this.sc.docCreateForm();
    this.sc.updateDisplay(false)
    this.docForm= true;
    this.doc.id = undefined;
    this.sc.updateDocView(this.doc)
  }

  isObjectEmpty(obj: Document): boolean {
    return Object.keys(obj).length === 0;
  }

  showFormDetails(){
    this.displayForm = true;
  }
}
