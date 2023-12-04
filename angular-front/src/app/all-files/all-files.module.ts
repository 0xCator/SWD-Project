import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';


import { GET_IMAGES_QUERY } from 'src/app/graphQL/query';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ApolloModule],
})
export class FileListModule {
  constructor(private apollo: Apollo) {
    apollo.watchQuery<any>({
      query: GET_IMAGES_QUERY
    });
  }
}