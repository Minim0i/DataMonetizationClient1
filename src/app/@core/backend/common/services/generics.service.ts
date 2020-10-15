/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Generics, ResultGlobalSearch } from '../../../interfaces/common/generics';
import { GenericsAPI } from '../api/generics.api';

@Injectable()
export class GenericsService extends Generics {
  get(paramValue: string): Observable<ResultGlobalSearch[]> {
    return this.api.get(paramValue);
  }

  constructor(private api: GenericsAPI) {
    super();
  }
}
