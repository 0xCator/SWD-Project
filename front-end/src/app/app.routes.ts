import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SdlcComponent } from './sdlc/sdlc.component';
import { FilesComponent } from './files/files.component';

export const routes: Routes = [
  { path: '', component: SdlcComponent },
  { path: 'files', component: FilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

