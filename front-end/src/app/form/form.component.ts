import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, FormControl, FormArray, Validators} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { Document } from '../models/document.module';
import {Apollo } from 'apollo-angular';
import { ApolloModule} from 'apollo-angular';
import { CREATE_DOC } from '../graphQL/mutation';

@Component({
  selector: 'app-form',
  standalone:true,
  imports: [ReactiveFormsModule,ApolloModule, MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonToggleModule,CommonModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent implements OnInit{
  InitiationForm!: FormGroup;
  SRSForm!: FormGroup;
  DesignForm!: FormGroup;
  phase: string =''
  doc: Document = new Document();
  constructor(private formBuilder: FormBuilder, private sc:SharedService,
             private apollo: Apollo){}
  ngOnInit(): void {
    this.InitiationForm = this.formBuilder.group({
      title:['', Validators.required],
      startDate:[null, Validators.required],
      endDate:[null, Validators.required],
      objectives:['', Validators.required],
      manager:['', Validators.required],
      budget:['', Validators.required],
      scope:['', Validators.required],
    })
    this.SRSForm = this.formBuilder.group({
      introduction:['', Validators.required],
      purpose:['', Validators.required],
      audience:['', Validators.required],
      description:['', Validators.required],
      featuresAndRequirements:['', Validators.required],
      useCase:[null, Validators.required],
    })

    this.DesignForm = this.formBuilder.group({
      files: new FormArray([])
    })
  }

  get designForms(){
    return(this.DesignForm.controls['files']) as FormArray;
  }

  addDesignForm(){
    let document = new FormGroup({
      filename: new FormControl('', Validators.required),
      imagefile: new FormControl('', Validators.required)
    })

    this.designForms.push(document);
  }

  removeDesignForm(i: number){
    this.designForms.removeAt(i);
  }
  handleButtonClick(buttonValue: string) {
    this.phase = buttonValue;
  }
  save(){

    this.apollo.mutate({
      mutation: CREATE_DOC,
      variables: {
        "document": {
          "docType": this.phase,
          "title": this.InitiationForm.value.title,
          "startDate": this.InitiationForm.value.startDate,
          "endDate": this.InitiationForm.value.endDate,
          "objective":this.InitiationForm.value.objectives,
          "manager": this.InitiationForm.value.manager,
          "budget": this.InitiationForm.value.budget,
          "scope": this.InitiationForm.value.scope,
        }
      }
      }).subscribe(({data}) => {
        console.log(data);
      }, (error) => {
        console.log('there was an error sending the query', error);
      }
    );

    // if(this.phase === 'Initiation'){
    //   this.apollo.mutate({
    //     mutation: CREATE_DOC,
    //     variables: {
    //       document: {
    //         docType: 'Initiation',
    //         title: this.InitiationForm.value.title,
    //         startDate: this.InitiationForm.value.startDate,
    //         endDate: this.InitiationForm.value.endDate,
    //         objective: this.InitiationForm.value.objectives,
    //         manager: this.InitiationForm.value.manager,
    //         budget: this.InitiationForm.value.budget,
    //         scope: this.InitiationForm.value.scope,
    //       }
    //     }
    //     }).subscribe(({data}) => {
    //       console.log(data);
    //     }, (error) => {
    //       console.log('there was an error sending the query', error);
    //     }
    //   );
    // }else if(this.phase === 'SRS'){
    //   this.apollo.mutate({
    //     mutation: CREATE_DOC,
    //     variables: {
    //       document: {
    //         docType: 'SRS',
    //         intro: this.SRSForm.value.introduction,
    //         purpose: this.SRSForm.value.purpose,
    //         intendedAudience: this.SRSForm.value.audience,
    //         description: this.SRSForm.value.description,
    //         srs: this.SRSForm.value.featuresAndRequirements,
    //         useCases: this.SRSForm.value.useCase
    //       }
    //     }
    //     }).subscribe(({data}) => {
    //       console.log(data);
    //     }, (error) => {
    //       console.log('there was an error sending the query', error);
    //     }
    //   );
    // }else if(this.phase === 'Design'){
    //   this.apollo.mutate({
    //     mutation: CREATE_DOC,
    //     variables: {
    //       document: {
    //         docType: 'Design',
    //         image: this.DesignForm.value.files
    //       }
    //     }
    //     }).subscribe(({data}) => {
    //       console.log(data);
    //     }, (error) => {
    //       console.log('there was an error sending the query', error);
    //     }
    //   );
    // }
    // this.sc.updateSharedVariable(true, this.doc);

  }
}
