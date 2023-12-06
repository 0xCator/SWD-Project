import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'

@Component({
  selector: 'app-form',
  standalone:true,
  imports: [ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit{
  InitiationForm!: FormGroup;
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
  }
}
