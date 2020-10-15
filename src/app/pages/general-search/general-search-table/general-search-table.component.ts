/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GenericsService } from 'app/@core/backend/common/services/generics.service';
import { ResultGlobalSearch } from 'app/@core/interfaces/common/generics';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './general-search-table.component.html',
  styleUrls: ['./general-search-table.component.scss'],
})
export class GeneralSearchTableComponent implements OnDestroy {
  alive = true;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      property: {
        title: 'Property',
        type: 'string',
      },
      value: {
        title: 'Value',
        type: 'string',
      },
    },
  };

  source: ResultGlobalSearch[];

  constructor(private service: GenericsService, private router: Router) {
  }

  onSearchConfirm(event): void {
    this.router.navigate(['companies', { fieldname: event.data.property, fieldvalue: event.data.value }]);
  }

  searchInRandomNode(searchValue: string) {
    this.service.get(searchValue).pipe(takeWhile(() => this.alive)).subscribe((ret: ResultGlobalSearch[]) => {
      const data = ret;
      this.source = data;
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
