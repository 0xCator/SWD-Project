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
  private docView = new BehaviorSubject<Document>(new Document());
  private displayForm = new BehaviorSubject<boolean>(false);
  private isCreateForm= new BehaviorSubject<boolean>(true);
  private phaseDoc = new BehaviorSubject<string>("");
  sharedPhaseDoc = this.phaseDoc.asObservable();
  sharedDocForm= this.docForm.asObservable();
  sharedDoc = this.doc.asObservable();
  sharedDocView = this.docView.asObservable();
  sharedDisplayedForm = this.displayForm.asObservable();
  sharedCreateForm= this.isCreateForm.asObservable();

  updatePhase(phase: string){
    this.phaseDoc.next(phase)
  }

  updateSharedVariable(newValue: boolean) {
    this.docForm.next(newValue);

  }
  updateDocView(doc: Document){
    this.docView.next(doc);
  }
  updateDisplay(bool: boolean){
    this.displayForm.next(bool);
  }
  docFormUpdate(){
    this.displayForm.next(false)
    this.docForm.next(true)
    this.isCreateForm.next(false)
  }

  docCreateForm(){
    this.isCreateForm.next(true)
  }
}

