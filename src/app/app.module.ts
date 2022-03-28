import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { UsersListComponent } from './users-list/users-list.component'
import { FormsModule } from '@angular/forms';
import { HerderComponent } from './herder/herder.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { UseComponent } from './use/use.component';
import { ArrydataComponent } from './arrydata/arrydata.component';
import { EmployesComponent } from './employes/employes.component';
import { AttendeeroutComponent } from './attendeerout/attendeerout.component';
import { AdminroutComponent } from './adminrout/adminrout.component';
import { PageNotFundComponent } from './page-not-fund/page-not-fund.component';
import { CustomstlyeDirective } from './customstlye.directive';
import { HttpClientModule } from '@angular/common/http';
import { AdimesModule } from './adimes/adimes.module';
import { UseModule } from './use/use.module';
// import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersListComponent,
    HerderComponent,
    FooterComponent,
    UseComponent,
    ArrydataComponent,
    EmployesComponent,
    AttendeeroutComponent,
    AdminroutComponent,
    PageNotFundComponent,
    CustomstlyeDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    AdimesModule,
    UseModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
