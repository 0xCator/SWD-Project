import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {
  @Input() forms: any[] = [];
  @Output() formSelected = new EventEmitter<any>();

  selectForm(form: any): void {
    this.formSelected.emit(form);
  }
}