/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../common/api/http.service';


@Injectable()
export class DeviceParametersApi {

  private readonly apiController: string = 'devices';

  constructor(private api: HttpService) {}

  list(deviceId: number): Observable<any> {
    return this.api.get(`${this.apiController}/${deviceId}/parameters`);
  }

  add(deviceId: number, parameter: any): Observable<any> {
    return this.api.post(`${this.apiController}/${deviceId}/parameters`, parameter);
  }

  edit(deviceId: number, parameter: any): Observable<any> {
    return this.api.put(`${this.apiController}/${deviceId}/parameters`, parameter);
  }

  get(deviceId: number, id: number): Observable<any> {
    return this.api.get(`${this.apiController}/${id}`);
  }

  remove(deviceId: number, parameterId: number): Observable<any> {
    return this.api.delete(`${this.apiController}/${deviceId}/parameters/${parameterId}`);
  }
}
