import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InitiationPhaseComponent } from './initiation-phase/initiation-phase.component';
import { RequirementPhaseComponent } from './requirement-phase/requirement-phase.component';
import { DesignPhaseComponent } from './design-phase/design-phase.component';
import { FormListComponent } from './form-list/form-list.component';
@NgModule({
  declarations: [
    InitiationPhaseComponent,
    RequirementPhaseComponent,
    DesignPhaseComponent,
    FormListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InitiationPhaseComponent,
    RequirementPhaseComponent,
    DesignPhaseComponent
  ]
})
export class SDLCModule { }
