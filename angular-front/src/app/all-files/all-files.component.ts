import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Injectable } from '@angular/core';
import { Image } from 'src/models/Form';
@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})

export class AllFilesComponent {
  
  images: Image[] = [];
  selectedImage: Image | null = null;

  // constructor(private imageService: ImageService) {}

  // ngOnInit() {
  //   this.images = this.imageService.getImages();
  // }

  // selectImage(image: Image): void {
  //   this.selectedImage = image;
  // }
}
