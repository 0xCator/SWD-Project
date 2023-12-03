import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_FORM } from 'src/app/graphQL/query';
import { CREATE_FORM } from 'src/app/graphQL/mutation';
import { initiation } from 'src/app/models/initiation';
@Component({
  selector: 'app-initiation-phase',
  templateUrl: './initiation-phase.component.html',
  styleUrls: ['./initiation-phase.component.css']
})
export class InitiationPhaseComponent {
  title: string = '';
  startDate: string = '';
  endDate: string = '';
  objectives: string = '';
  managers: string = '';
  information: string = '';
  scopeStatements: string = '';
  constructor(private apollo: Apollo) { }
  
  saveForm() {
    this.apollo.mutate<any>({
        mutation: CREATE_FORM,
        variables: {
          "initiation": {
            "title": this.title!,
            "startDate": this.startDate!,
            "endDate": this.endDate!,
          }
        },
      })
  }
}
