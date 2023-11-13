import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormArrayDemoComponent } from './components/form-array-demo/form-array-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"form-array",component:FormArrayDemoComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
