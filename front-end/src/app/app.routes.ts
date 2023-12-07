import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { SdlcComponent } from './sdlc/sdlc.component';

export const routes: Routes = [
  { path: '', component: SdlcComponent },
  { path: 'files', component: SdlcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

