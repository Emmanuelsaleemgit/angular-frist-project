import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AttendeeroutComponent } from './attendeerout/attendeerout.component';
import { AdminroutComponent } from './adminrout/adminrout.component';
import { PageNotFundComponent } from './page-not-fund/page-not-fund.component';

const routes: Routes = [

{
  path:'',
  component: HomeComponent
},

{
  path:'home',
  component: HomeComponent
},
{
  path:'attendee',
  component:AttendeeroutComponent
},
{
  path:'admin',
  component:AdminroutComponent
},
{
  path:'**',
  component:PageNotFundComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
