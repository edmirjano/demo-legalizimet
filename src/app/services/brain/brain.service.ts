import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LegalObject } from 'src/app/models/legal-object';

@Injectable({
  providedIn: 'root'
})
export class BrainService {
  // BASE_URL = "http://localhost:3000";
  // BASE_URL = "http://localhost:5000/legalizimet-5579a/us-central1/fbapp";
  BASE_URL = "https://legalizimet.herokuapp.com";
  constructor(
    private http: HttpClient
  ) { }


  getResult(data: LegalObject) {
    return this.http.post(`${this.BASE_URL}/getResult`, data).toPromise();
  }

  gethistory() {
    return this.http.get(`${this.BASE_URL}/getHistory`).toPromise();
  }
}
