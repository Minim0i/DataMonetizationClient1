/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { CompanyInfoModel } from 'app/@core/interfaces/common/companies';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class CompaniesAPI {
  private readonly apiController: string = 'companies';

  constructor(private api: HttpService) { }

  get(): Observable<CompanyInfoModel[]> {
    return this.api.get(this.apiController);
  }

  getByFieldName(fieldName: string, fieldValue: string): Observable<CompanyInfoModel[]> {
    return this.api.getComplement(this.apiController, `${fieldName}/${fieldValue}`);
  }

  getByMatricule(): Observable<CompanyInfoModel[]> {
    return this.api.getComplement(this.apiController, 'matricules');
  }
}
