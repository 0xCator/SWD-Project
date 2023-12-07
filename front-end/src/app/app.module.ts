import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import { SdlcComponent } from './sdlc/sdlc.component'
import {NavbarComponent} from './navbar/navbar.component'
import {FilesComponent} from './files/files.component'


import { HttpClientModule} from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
import {ApolloModule, Apollo} from 'apollo-angular';

const uri = 'http://127.0.0.1:4000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    // link: createUploadLink({ uri }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }
  };
}



@NgModule({
declarations: [
    AppComponent,
    FormComponent,
    SdlcComponent,
    NavbarComponent,
    FilesComponent
],
    imports:[
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        ApolloModule,
        HttpClientModule,
        Apollo
    ],
    providers: [
      {
        provide: APOLLO_OPTIONS,
        useFactory: createApollo,
        deps: [HttpLink],
      },
    ],
    bootstrap:[AppComponent]
})
export class AppModule {
}
