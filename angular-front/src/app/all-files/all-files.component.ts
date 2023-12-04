import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_IMAGES_QUERY } from 'src/app/graphQL/query';
@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent {
forms: any;


  images: any[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_IMAGES_QUERY
      })
      .valueChanges.subscribe(({ data }) => {
        this.images = data?.images;
      });
  }
  selectForm(form:any) {//to show up the phase's image 

  }
}
