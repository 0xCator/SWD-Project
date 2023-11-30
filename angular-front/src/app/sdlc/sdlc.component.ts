import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.css']
})
export class SDLCComponent {
  selectedPhase: string ='';
  showForm = false;
  showFiles = false;

  phases = ['Initiation', 'SRS', 'Design'];

  constructor(private router: Router) {}

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

  saveData(): void {
    // Logic to save the form data
  }
}
