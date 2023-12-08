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
import { CREATE_DOC, UPLOAD_FILE } from '../graphQL/mutation';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

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
  SRSFile!: String;
  DesignForm!: FormGroup;
  DesignFiles!: String[];
  phase: string =''
  doc: Document = new Document();

  constructor(private formBuilder: FormBuilder, private sc:SharedService,
             private apollo: Apollo){}
  @ViewChild('fileInput')
  fileInput!: ElementRef;


  ngOnInit(): void {
    this.DesignFiles = [];
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
      imageTitle: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required)
    })

    this.designForms.push(document);
    this.DesignFiles.push("");
  }

  removeDesignForm(i: number){
    this.designForms.removeAt(i);
    this.DesignFiles.splice(i, 1);
  }
  handleButtonClick(buttonValue: string) {
    this.phase = buttonValue;
  }
  handleSRSFile(event: any) {
    const file: File = event.target.files[0];
    const ext = file.name.slice(file.name.lastIndexOf('.'), file.name.length);
    if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.image'){
      this.apollo.mutate<any>({
        mutation: UPLOAD_FILE,
        variables: {
          file
        },
        context: {
          useMultipart: true
        }
      })
      .subscribe(({ data }: any) => {
        console.log(data)
        this.SRSFile = data.uploadFile.url;
      });
    }else{
      this.fileInput.nativeElement.value = '';
      alert("Please upload a valid image file");
    }
  }
  handleDesignFile(event: any, index: number) {
    const file: File = event.target.files[0];
    const ext = file.name.slice(file.name.lastIndexOf('.'), file.name.length);
    if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.image'){
    console.log(file);
      this.apollo.mutate<any>({
        mutation: UPLOAD_FILE,
        variables: {
          file
        },
        context: {
          useMultipart: true
        }
      })
        .subscribe(({ data }: any) => {
          console.log(data)
          this.DesignFiles[index] = data.uploadFile.url;
          console.log(this.DesignFiles);
        });
    }else{
      this.fileInput.nativeElement.value = '';
      alert("Please upload a valid image file");
    }
  }
  save(){

    if (this.phase === 'InitiationForm') {
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
            "scope": this.InitiationForm.value.scope
          }
        }
        }).subscribe(({data}) => {
          console.log(data);
        }, (error) => {
          console.log('there was an error sending the query', error);
        }
      );
    } else if (this.phase === 'SRSForm') {
      this.apollo.mutate({
        mutation: CREATE_DOC,
        variables: {
          "document": {
            "docType": this.phase,
            "intro": this.SRSForm.value.introduction,
            "purpose": this.SRSForm.value.purpose,
            "intendedAudience": this.SRSForm.value.audience,
            "description": this.SRSForm.value.description,
            "srs": this.SRSForm.value.featuresAndRequirements,
            "useCases": this.SRSFile
          }
        }
        }).subscribe(({data}) => {
          console.log(data);
        }, (error) => {
          console.log('there was an error sending the query', error);
        }
      );
    }
    else if(this.phase === 'DesignForm'){
      this.DesignForm.value.files.forEach((element: any, index: number) => {
        element.imagePath = this.DesignFiles[index];
      });
      console.log(this.DesignForm.value.files);
      this.apollo.mutate({
        mutation: CREATE_DOC,
        variables: {
          document: {
            docType: this.phase,
            image: this.DesignForm.value.files
          }
        }
        }).subscribe(({data}) => {
          console.log(data);
        }, (error) => {
          console.log('there was an error sending the query', error);
        }
      );
    }
    this.sc.updateSharedVariable(false);
    this.DesignFiles = [];
    this.SRSFile="";
  }
}
