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

@Component({
  selector: 'app-form',
  standalone:true,
  imports: [ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonToggleModule,CommonModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent implements OnInit{
  InitiationForm!: FormGroup;
  SRSForm!: FormGroup;
  DesignForm!: FormGroup;
  phase: string ='';
  doc: Document = new Document();
  opened=true;
  constructor(private formBuilder: FormBuilder, private sc:SharedService){}
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
    if(this.phase === "InitiationForm"){
      this.doc.docType = "Initiation";
      this.doc.title = this.InitiationForm.value.title;
      this.doc.startDate = this.InitiationForm.value.startDate;
      this.doc.endDate = this.InitiationForm.value.endDate;
      this.doc.objective = this.InitiationForm.value.objectives;
      this.doc.manager = this.InitiationForm.value.manager;
      this.doc.budget = this.InitiationForm.value.budget;
      this.doc.scope = this.InitiationForm.value.scope;
    }else if(this.phase === "SRSForm"){
      this.doc.docType = "SRS";
      this.doc.intro = this.SRSForm.value.introduction;
      this.doc.purpose = this.SRSForm.value.purpose;
      this.doc.intendedAudience = this.SRSForm.value.audience;
      this.doc.description = this.SRSForm.value.description;
      this.doc.srs = this.SRSForm.value.featuresAndRequirements;
      this.doc.useCases = this.SRSForm.value.useCase;
    }else if(this.phase === "DesignForm"){
      this.doc.docType = "Design";
      this.doc.filename = this.DesignForm.value.filename;
      this.doc.imagefile = this.DesignForm.value.imagefile;
    }
    this.sc.updateSharedVariable(false, this.doc);
  }

  closeDoc(){
    this.sc.updateSharedVariable(false,this.doc);
  }
}
