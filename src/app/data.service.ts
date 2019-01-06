import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
  private apiUrl = '../mock/mock-data.json';
  constructor(public http: HttpClient) {}
  getApplications(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  saveApplication(application: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, application);
  }



  // addApplication(name: string): Observable<IApplication> {
  //   let body = JSON.stringify({ name });
  //   let headers = new Headers({ 'Content-Type': 'application/json'});
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.post(this.url, body, options)
  //     .map(this.handleResponse)
  //   .catch(this.handleError);
  // }
  // private handleError(error: Response) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }
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
