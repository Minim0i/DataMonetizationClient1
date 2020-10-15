/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class StatsAPI {
  private readonly apiController: string = 'stats';

  constructor(private api: HttpService) { }

  getbyLegalName(): Observable<any[]> {
    return this.api.getComplement(this.apiController, 'bylegalname');
  }

  getbyDescription(): Observable<any[]> {
    return this.api.getComplement(this.apiController, 'bydescription');
  }

  getByPublication(): Observable<any[]> {
    return this.api.getComplement(this.apiController, 'bypublication');
  }
}
