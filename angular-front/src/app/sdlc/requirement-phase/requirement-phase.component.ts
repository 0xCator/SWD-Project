import { Component, EventEmitter, Output } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_FORM } from 'src/app/graphQL/query';
import { CREATE_FORM } from 'src/app/graphQL/mutation';
import { initiation } from 'src/app/models/initiation';
@Component({
  selector: 'app-requirement-phase',
  templateUrl: './requirement-phase.component.html',
  styleUrls: ['./requirement-phase.component.css']
})
export class RequirementPhaseComponent {
  introduction: string = '';
  purpose: string = '';
  audience: string = '';
  description: string = '';
  SRS: string = '';
  useImage: string = '';


  constructor(private apollo: Apollo) { }
  saveForm() {
    this.apollo.mutate<any>({
        mutation: CREATE_FORM,
        variables: {
          "srs": {
            "intro": this.introduction!,
            "purpose": this.purpose!,
            "audience": this.audience!,
          }
        },
      })
  }
}
