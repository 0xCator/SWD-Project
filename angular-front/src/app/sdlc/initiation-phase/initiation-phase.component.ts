import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_INITIATION_QUERY,UPDATE_INITIATION_MUTATION } from 'src/app/graphQL/query';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-initiation-phase',
  templateUrl: './initiation-phase.component.html',
  styleUrls: ['./initiation-phase.component.css'],

})
export class InitiationPhaseComponent  implements OnInit{
   initiationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apollo: Apollo) {}

  ngOnInit(): void {
    this.initiationForm = this.formBuilder.group({
      title: [''],
      startDate: [null],
      endDate: [null],
      objective: [''],
      manager: [''],
      budget: [null],
      scope: ['']
    });

    this.fetchInitiationData();
  }

  fetchInitiationData(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_INITIATION_QUERY
      })
      .valueChanges.subscribe(({ data }) => {
        const initiationData = data?.initiation;

        if (initiationData) {
          this.initiationForm?.patchValue(initiationData);
        }
      });
  }

  onSubmit(): void {
    if (this.initiationForm?.valid) {
      const input = this.initiationForm.value;

      this.apollo
        .mutate<any>({
          mutation: UPDATE_INITIATION_MUTATION,
          variables: { input }
        })
        .subscribe(({ data }) => {
          const updatedInitiationData = data?.updateInitiation;

          if (updatedInitiationData) {
            this.initiationForm?.patchValue(updatedInitiationData);
          }
        });
    }
  }
}
