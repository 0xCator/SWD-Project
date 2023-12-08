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

@Component({
  selector: 'app-sdlc',
  standalone:true,
  imports: [CommonModule, MatCardModule, MatIconModule,FormComponent, MatSelectModule, MatButtonModule, MatFormFieldModule, MatTableModule],
  templateUrl: './sdlc.component.html',
  styleUrl: './sdlc.component.css'
})
export class SdlcComponent implements OnInit{
  docForm = false
  update = false;
  docList: Document[]= [];
  constructor(private sc: SharedService, private apollo: Apollo) {

  }
  ngOnInit(): void {
    this.sc.sharedDocForm.subscribe((value)=>{
      this.docForm = value;
    })
    setInterval(()=>{
    this.apollo.query<any>({
      query: GET_ALL_DOC
    }).subscribe(({data})=>{
      this.docList = data.getAllDocuments ;
    })
    }, 200)
  }


  cardClicked(doc: Document) {
    console.log(doc);
  }
  createDoc(){
    this.docForm= true;
  }
  isObjectEmpty(obj: Document): boolean {
    return Object.keys(obj).length === 0;
  }


}
