import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


import { GraphQLModule } from 'src/app/graphql.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { AllFilesComponent } from 'src/app/all-files/all-files.component';
// import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to imports
  ],
  exports: [

  ]
})
export class SDLCModule {

 }