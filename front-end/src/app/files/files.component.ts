import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { SharedService } from '../services/shared.service';
import { Document, Image } from '../models/document.module';
import { Apollo } from 'apollo-angular';
import { GET_ALL_DOC} from '../graphQL/query';


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
  imageView = false
  imgList: Image[] = [];
  docList: Document[]= [];
  image!: Image;
  constructor(private sc: SharedService, private apollo: Apollo) {}
  ngOnInit(): void {
    this.apollo.query<any>({
      query: GET_ALL_DOC
    }).subscribe(({data})=>{
      this.docList= data.getAllDocuments ;
      this.getImgList();
    })
  }

  getImgList(){
    for(const doc of this.docList){
      if(doc.useCases != null){
        console.log(doc.useCases);
        const useCase: Image = {
          imageTitle: 'Use Case',
          imagePath: doc.useCases
        }
        this.imgList.push(useCase);
      }
      if(doc.image){
        for (const img of doc.image){
          this.imgList.push(img);
          console.log(this.imgList);
        }
      }
    }
  }

  cardClicked(img: Image) {
    this.imageView = true;
    this.image = img;
    console.log(this.image);
  }
  isObjectEmpty(obj: Image): boolean {
    return Object.keys(obj).length === 0;
  }
}
