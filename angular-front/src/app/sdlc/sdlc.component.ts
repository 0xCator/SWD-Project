import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Form } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { GET_INITIATION_QUERY,UPDATE_INITIATION_MUTATION } from 'src/app/graphQL/query';
@Component({

  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.css'],

})
export class SDLCComponent {
  selectedPhase: string = '';
  showForm: boolean = false;
  showFiles: boolean = false;
  savedForms: any[] = [];
  phases: string[] = ['Initiation', 'SRS', 'Design'];

  initiation!: FormGroup;
  SRS!: FormGroup;
  Design!: FormGroup;

  constructor(private router: Router,private formBuilder:FormBuilder) {}
  
  selectPhase(event: any): void {
    const phase = event.target.value;
    this.selectedPhase = phase;
    this.showForm = true;
    this.showFiles = false;
    this.router.navigate(['/sdlc', phase.toLowerCase()]);
  }


  closeForm(): void {
    this.showForm = false;
    this.selectedPhase = '';
  }
  initiationForm = this.formBuilder.group({
    title: [''],
    startDate: [null],
    endDate: [null],
    objective: [''],
    manager: [''],
    budget: [null],
    scope: ['']
  });
  SRSForm = this.formBuilder.group({
    title: [''],
    startDate: [null],
    endDate: [null],
    objective: [''],
    manager: [''],
    budget: [null],
    scope: ['']
  });

  fetchInitiationData(): void {
    
  }
  onSubmit(): void {

  }
}