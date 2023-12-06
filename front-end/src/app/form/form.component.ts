import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CommonModule } from '@angular/common';

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
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.InitiationForm = this.formBuilder.group({
      title:'',
      startDate:null,
      endDate:null,
      objectives:'',
      manager:'',
      budget:'',
      scope:'',
    })
    this.SRSForm = this.formBuilder.group({
      introduction:'',
      purpose:'',
      audience:'',
      description:'',
      featuresAndRequirements:'',
      useCase:null,
    })
  }
  handleButtonClick(buttonValue: string) {
    this.phase = buttonValue;
  }
}
