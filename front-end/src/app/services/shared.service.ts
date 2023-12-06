// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private docForm = new BehaviorSubject<boolean>(false);
  sharedVariable$ = this.docForm.asObservable();

  updateSharedVariable(newValue: boolean) {
    this.docForm.next(newValue);
  }
}

