import { Component } from '@angular/core';

@Component({
  selector: 'app-initiation-phase',
  templateUrl: './initiation-phase.component.html',
  styleUrls: ['./initiation-phase.component.css']
})
export class InitiationPhaseComponent {
  title: string = '';
  startDate: string = '';
  endDate: string = '';
  objectives: string = '';
  managers: string = '';
  information: string = '';
  scopeStatements: string = '';

  saveForm(): void {
    // Logic to save the form data

  }

  resetForm(): void {
    this.title = '';
    this.startDate = '';
    this.endDate = '';
    this.objectives = '';
    this.managers = '';
    this.information = '';
    this.scopeStatements = '';
  }
}
