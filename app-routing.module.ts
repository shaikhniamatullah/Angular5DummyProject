import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent }   from './registration-form/registration-form.component';
import { ResultsComponent }   from './results/results.component';
import { LoginComponent }   from './login/login.component';
const routes: Routes = [
  { path: 'registrationForm', component: RegistrationFormComponent },
  { path: 'resultsForm', component: ResultsComponent },
  { path: '',redirectTo: 'login',pathMatch: 'full'},
  { path: 'login', component: LoginComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { 

}
