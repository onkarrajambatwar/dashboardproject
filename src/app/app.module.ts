import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {Topnavbar} from './components/topnavbar/topnavbar.component';
import {Navigation} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {HomeComponent} from './pages/home/home.component';
import { AppRegistrationComponent } from './components/app-registration/app-registration.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    AppRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
