import { Component } from '@angular/core';

@Component({
  selector: 'app-design-phase',
  templateUrl: './design-phase.component.html',
  styleUrls: ['./design-phase.component.css']
})
export class DesignPhaseComponent {
  fileName: string = '';

  saveData(): void {
    const formData = {
      fileName: this.fileName
    };
    const savedForm = { phase: 'Design', formData };
    // this.savedForms.push(savedForm);
  }
}