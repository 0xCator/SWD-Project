import { Injectable } from '@angular/core';
import { design, initiation, srsClass } from "src/models/Form";

@Injectable({ providedIn: "root" })
export class FormService {
  init: initiation[] = [
    { budget: 1, title: "init title" },
  ];
  srs: srsClass[] = [
    { introduction: "srs intro" },
  ];
  design: design[] = [];

  saveInitiation(initObj: initiation) {
    this.init.push(initObj);
  }

  saveSRS(srsObj: srsClass) {
    this.srs.push(srsObj);
  }

  saveDesign(designObj: design) {
    this.design.push(designObj);
  }

  getInitiationForms() {
    return this.init.slice();
  }

  getSRSForms() {
    return this.srs.slice();
  }

  editInitiationForm(index: number, updatedInitiation: initiation) {
    if (index >= 0 && index < this.init.length) {
      this.init[index] = updatedInitiation;
    }
  }

  editSRSForm(index: number, updatedSRS: srsClass) {
    if (index >= 0 && index < this.srs.length) {
      this.srs[index] = updatedSRS;
    }
  }

  deleteInitiationForm(index: number) {
    if (index >= 0 && index < this.init.length) {
      this.init.splice(index, 1);
    }
  }

  deleteSRSForm(index: number) {
    if (index >= 0 && index < this.srs.length) {
      this.srs.splice(index, 1);
    }
  }
}