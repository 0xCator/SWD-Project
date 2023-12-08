// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Document } from '../models/document.module';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private docForm = new BehaviorSubject<boolean>(false);
  private doc = new BehaviorSubject<Document>(new Document());
  sharedDocForm= this.docForm.asObservable();
  sharedDoc = this.doc.asObservable();

  updateSharedVariable(newValue: boolean) {
    this.docForm.next(newValue);

  }
}

