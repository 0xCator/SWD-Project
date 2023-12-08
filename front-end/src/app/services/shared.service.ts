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
  private docView = new BehaviorSubject<Document>(new Document());
  sharedDocView = this.docView.asObservable();
  private displayForm = new BehaviorSubject<boolean>(false);
  sharedDisplayedForm = this.displayForm.asObservable();

  updateSharedVariable(newValue: boolean, newDoc: Document) {
    this.docForm.next(newValue);
    this.doc.next(newDoc);
  }
  updateDocView(doc: Document){
    this.docView.next(doc);
  }
  updateDisplay(bool: boolean){
    this.displayForm.next(bool);
  }
}

