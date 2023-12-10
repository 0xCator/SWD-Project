import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service'
import {Document} from '../models/document.module'
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from '../form/form.component';
import { Apollo } from 'apollo-angular';
import { DELETE_DOC } from '../graphQL/mutation';


@Component({
  selector: 'app-display-forms',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormComponent],
  templateUrl: './display-forms.component.html',
  styleUrl: './display-forms.component.css'
})
export class DisplayFormsComponent implements OnInit{
  doc!: Document
  opened=true;
  editing=false;

    constructor(private sc: SharedService, private apollo: Apollo) {
    }

  ngOnInit(){
    this.sc.updateSharedVariable(false);
    this.sc.sharedDocView.subscribe((value)=>{
      this.doc= value;
    })
  }

  closeDoc(){
    this.sc.updateDocView(this.doc)
    this.sc.docCreateForm()
    this.sc.updateDisplay(false);
    this.doc.id = undefined
  }

  updateDoc(){
    this.sc.updatePhase(this.doc.docType);
    this.sc.docFormUpdate();
  }
  deleteDoc(){
    this.apollo.mutate({
      mutation: DELETE_DOC,
      variables:{
        "deleteDocumentId": this.doc.id,
      }
      }
    ).subscribe(({data}) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
    this.doc.id = undefined
    this.sc.updateDocList(true);
    this.sc.updateDocView(this.doc)
    this.closeDoc()
  }



}
