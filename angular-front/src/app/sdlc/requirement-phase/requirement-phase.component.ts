import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-requirement-phase',
  templateUrl: './requirement-phase.component.html',
  styleUrls: ['./requirement-phase.component.css']
})
export class RequirementPhaseComponent {
  introduction: string = '';
  purpose: string = '';
  audience: string = '';
  description: string = '';
  SRS: string = '';
  useImage: string = '';

  // @Output() saveForm: EventEmitter<any> = new EventEmitter<any>();

  saveData(): void {
    const formData = {
      introduction: this.introduction,
      purpose: this.purpose,
      audience: this.audience,
      description: this.description,
      SRS: this.SRS,
      useImage: this.useImage
    };

    // this.saveForm.emit({ phase: 'SRS', formData });
  }
}