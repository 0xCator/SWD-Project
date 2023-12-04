import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_FORMS_QUERY, DELETE_FORM_MUTATION, UPDATE_FORM_MUTATION } from 'src/app/graphQL/query';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  forms: any[] = [];
  selectedForm!: any;
  updateForm!: FormGroup;

  constructor(private apollo: Apollo, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      title: [''],
      phase: ['']
    });

    this.fetchForms();
  }

  fetchForms(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_FORMS_QUERY
      })
      .valueChanges.subscribe(({ data }) => {
        this.forms = data?.forms;
      });
  }

  selectForm(form: any): void {
    this.selectedForm = form;
    this.updateForm?.patchValue({
      title: form.title,
      phase: form.phase
    });
  }

  deleteForm(id: string): void {
    this.apollo
      .mutate<any>({
        mutation: DELETE_FORM_MUTATION,
        variables: { id }
      })
      .subscribe(() => {
        this.fetchForms();
      });
  }

  updateSelectedForm(): void {
    const id = this.selectedForm.id;
    const input = this.updateForm.value;

    this.apollo
      .mutate<any>({
        mutation: UPDATE_FORM_MUTATION,
        variables: { id, input }
      })
      .subscribe(({ data }) => {
        const updatedForm = data?.updateForm;
        if (updatedForm) {
          this.selectedForm.title = updatedForm?.title;
          this.selectedForm.phase = updatedForm?.phase;
        }
      });
  }
}