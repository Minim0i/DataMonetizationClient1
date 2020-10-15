/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultGlobalSearch } from '../../../interfaces/common/generics';
import { HttpService } from './http.service';

@Injectable()
export class GenericsAPI {
  private readonly apiController: string = 'globalsearch';

  constructor(private api: HttpService) { }

  get(paramValue: string): Observable<ResultGlobalSearch[]> {
    return this.api.getComplement(this.apiController, paramValue);
  }
}
