/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companies, CompanyInfoModel } from '../../../interfaces/common/companies';
import { CompaniesAPI } from '../api/companies.api';

@Injectable()
export class CompaniesService extends Companies {
  get(): Observable<CompanyInfoModel[]> {
    return this.api.get();
  }
  getByFieldName(fieldName: string, fieldProperty: string): Observable<CompanyInfoModel[]> {
    return this.api.getByFieldName(fieldName, fieldProperty);
  }
  getByMatricule(): Observable<CompanyInfoModel[]> {
      return this.api.getByMatricule();
  }
  constructor(private api: CompaniesAPI) {
    super();
  }
}
