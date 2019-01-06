import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.css']
})
export class AppRegistrationComponent implements OnInit {
  public applications: any[];
  public application: Application= {
    ApplicationName: '',
    ApplicationType: '',
    ApplicationDetails : {
      hostname: '',
      password: '',
      port: '',
      serviceid: ''
    },
    OAuthDetails: {
      OAuthType: '',
      adminID: '',
      adminPassword: ''
    }
  };

  public applicationType: any[];
  public authProviders: any[];
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.loadApplication();
  }

  loadApplication(): void {
    this.dataService.getApplications()
        .subscribe(applocation => this.applications = applocation.GetAllApplications.Response.Applications);
    console.log(this.applications);
  }

  registerApplication(): void{
    this.dataService.saveApplication(this.application);
  }

}

export interface ApplicationDetails {
  hostname: string;
  port: string;
  serviceid: string;
  password: string;
}

export interface OAuthDetails {
  OAuthType: string;
  adminID: string;
  adminPassword: string;
}

export interface Application {
  ApplicationType: string;
  ApplicationName: string;
  ApplicationDetails: ApplicationDetails;
  OAuthDetails: OAuthDetails;
}

