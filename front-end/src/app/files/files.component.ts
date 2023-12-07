import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { SharedService } from '../services/shared.service';
import { Document } from '../models/document.module';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule
  ],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {
  docForm = false
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
