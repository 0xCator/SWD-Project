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
phase: string =''
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
  this.sc.updateSharedVariable(false)
}
}
