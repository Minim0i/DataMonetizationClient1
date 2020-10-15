/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CompanyByDescription, CompanyByLegalName,
  CompanyByPublication, Stats,
} from '../../../interfaces/common/stats';
import { StatsAPI } from '../api/stats.api';

@Injectable()
export class StatsService extends Stats {
  getByLegalName(): Observable<CompanyByLegalName[]> {
    return this.api.getbyLegalName();
  }

  getByDescription(): Observable<CompanyByDescription[]> {
    return this.api.getbyDescription();
  }

  getByPublication(): Observable<CompanyByPublication[]> {
    return this.api.getByPublication();
  }

  constructor(private api: StatsAPI) {
    super();
  }
}
