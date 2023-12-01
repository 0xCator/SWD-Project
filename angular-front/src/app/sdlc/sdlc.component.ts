import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.css']
})
export class SDLCComponent {
  selectedPhase: string = '';
  showForm: boolean = false;
  showFiles: boolean = false;
  savedForms: any[] = [];
  phases: string[] = ['Initiation', 'SRS', 'Design'];

  constructor(private router: Router) {}

  selectPhase(event: any): void {
    const phase = event.target.value;
    this.selectedPhase = phase;
    this.showForm = true;
    this.showFiles = false;
    this.router.navigate(['/sdlc', phase.toLowerCase()]);
  }

  ngOnInit(): void {
    this.savedForms = [
      { phase: 'Initiation', formData: { /* initiation form data */ } },
      { phase: 'SRS', formData: { /* SRs // data */ } },
      { phase: 'Design', formData: { /* design // data */ } },
    ];
  }

  closeForm(): void {
    this.showForm = false;
    this.selectedPhase = '';
  }
  /*
  saveInitiationForm(): void {
    const formData = { };// Get the form data for Initiation phase 
    const savedForm = { phase: 'Initiation', formData };
    this.savedForms.push(savedForm);
  }

  saveSRSForm(): void {
    const formData = {  };// Get the form data for SRS phase 
    const savedForm = { phase: 'SRS', formData };
    this.savedForms.push(savedForm);
  }

  saveDesignForm(): void {
    const formData = {  }; // Get the form data for Design phase
    const savedForm = { phase: 'Design', formData };
    this.savedForms.push(savedForm);
  }
  saveForm(event: any): void {
    const savedForm = event;
    this.savedForms.push(savedForm);
    
      // this.formList.push(savedForm);
  }
  */
  
}