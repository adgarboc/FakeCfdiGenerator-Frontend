import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Contribuyente} from "../models/contribuyente";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {

  endpoint = environment.api + "Contribuyente";
  constructor(private http: HttpClient) { }

  getContribuyentes(): Observable<Contribuyente[]> {
    return this.http.get<Contribuyente[]>(this.endpoint);
  }
}
