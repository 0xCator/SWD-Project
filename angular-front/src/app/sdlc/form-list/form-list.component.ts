import { Component, EventEmitter, Input, Output } from '@angular/core';
import {GETALL_FORMS,EDIT_FORM,DELETE_FORM} from "src/app/graphQL/mutation"
import { Apollo } from 'apollo-angular';
import { initiation } from 'src/models/initiation';
import { SRS } from 'src/app/models/srs';
import { Design } from 'src/app/models/design';
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {
  constructor(private apollo: Apollo) { }
  initationForm?: initiation[];
  srsForm?: SRS[];
  designForm?: Design[];
  variable?:string;
  getAllForms() {
    this.apollo.query<any>({
        query: GETALL_FORMS,
      })
      .subscribe(({ data }) => {

      });
  }

  deleteUser() {
    this.apollo.mutate<any>({
      mutation: DELETE_FORM,
      variables: {
        // "id": this.
      },
    })
    .subscribe();
  }
}