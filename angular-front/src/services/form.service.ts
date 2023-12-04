import { Form } from "@angular/forms";
import { Injectable } from '@angular/core';
import { initiation, srsClass } from "src/models/Form";
@Injectable({providedIn: "root"})
export class FormService {

    init: initiation[] = [
        { budget: 1, title: "init title" },
    ];
    srs: srsClass[] = [
        { introduction: "srs intro" },
    ];

    saveInitiation(initObj: initiation) {
        this.init.push(initObj);
    }
    saveSRS(srsObj: srsClass) {
        this.srs.push(srsObj);
    }
    getinitiationForms(){
        return this.init.slice();
    }
    getSRSForms(){
        return this.srs.slice();
    }
}