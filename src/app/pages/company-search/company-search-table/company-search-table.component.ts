/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { CompaniesService } from '../../../@core/backend/common/services/companies.services';
import { CompanyInfoModel } from '../../../@core/interfaces/common/companies';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './company-search-table.component.html',
  styleUrls: ['./company-search-table.component.scss'],
})
export class CompanySearchTableComponent implements OnDestroy {

  alive = true;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      matricule: {
        title: 'Matricule',
        type: 'string',
      },
      corporateName: {
        title: 'Corporate Name',
        type: 'string',
      },
      name: {
        title: 'Legal Name',
        type: 'string',
      },
      registrationAt: {
        title: 'Registration At',
        type: 'string',
      },
    },
  };

  source: CompanyInfoModel[];

  constructor(private service: CompaniesService, private router: Router) {
  }

  searchAll() {
    this.service.get().pipe(takeWhile(() => this.alive)).subscribe((ret: CompanyInfoModel[]) => {
      const data = ret;
      this.source = data;
    });
  }

  searchCompany(propertyName: string, propertyValue: string) {
    this.service.getByFieldName(propertyName, propertyValue)
      .pipe(takeWhile(() => this.alive))
      .subscribe((ret: CompanyInfoModel[]) => {
        const data = ret;
        this.source = data;
      });
  }

  onSearchConfirm(event): void {
    // this.router.navigate(['companies', { fieldname: event.data.property, fieldvalue: event.data.value }])
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
