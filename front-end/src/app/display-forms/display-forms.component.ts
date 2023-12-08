import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service'
import {Document} from '../models/document.module'
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-display-forms',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormComponent],
  templateUrl: './display-forms.component.html',
  styleUrl: './display-forms.component.css'
})
export class DisplayFormsComponent implements OnInit{
  docList!: Document
  doc: Document = new Document();
  opened=true;
  editing=false;

    constructor(private sc: SharedService) {
    }

  ngOnInit(){
    this.sc.sharedDocView.subscribe((value)=>{
      this.docList = value;
    })
  }

  closeDoc(){
    this.sc.updateDisplay(false);
  }


}
