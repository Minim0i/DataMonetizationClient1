/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';
import { StatsService } from 'app/@core/backend/common/services/stats.service';
import { CompanyByDescription, CompanyByLegalName, CompanyByPublication } from 'app/@core/interfaces/common/stats';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-d3',
  styleUrls: ['./stat.component.scss'],
  templateUrl: './stat.component.html',
})
export class StatComponent implements OnDestroy {
  private alive = true;
  barChartLabels: string[] = [];
  nbTotalCompany: string[] = [];
  dataLegalForm: any;
  dataDescription: any;
  dataPublication: any;
  constructor(
    private stats: StatsService) {

    this.loadChartLegalForm();
    this.loadChartDescription();
    this.loadChartPublication();
  }

  loadChartLegalForm() {
    this.barChartLabels = [];
    this.nbTotalCompany = [];
    this.stats.getByLegalName().pipe(takeWhile(() => this.alive)).subscribe((ret: CompanyByLegalName[]) => {

      for (let i = 0; i < ret.length; i++) {
        this.nbTotalCompany.push(ret[i].nbMat);
        this.barChartLabels.push(ret[i].legalName);
      }

      this.dataLegalForm = {
        labels: this.barChartLabels,
        datasets: [{
          data: this.nbTotalCompany,
          label: 'Total Company by Legal Name',
          backgroundColor: NbColorHelper.hexToRgbA('#335EFF', 0.8),
        }],
      };
    });
  }

  loadChartDescription() {
    this.barChartLabels = [];
    this.nbTotalCompany = [];
    this.stats.getByDescription().pipe(takeWhile(() => this.alive)).subscribe((ret: CompanyByDescription[]) => {

      for (let i = 0; i < ret.length; i++) {
        this.nbTotalCompany.push(ret[i].nbMat);
        this.barChartLabels.push(ret[i].codeDesc);
      }

      this.dataDescription = {
        labels: this.barChartLabels,
        datasets: [{
          data: this.nbTotalCompany,
          label: 'Total Company by Description',
          backgroundColor: NbColorHelper.hexToRgbA('#335EFF0', 0.8),
        }],
      };
    });
  }

  loadChartPublication() {
    this.barChartLabels = [];
    this.nbTotalCompany = [];
    this.stats.getByPublication().pipe(takeWhile(() => this.alive)).subscribe((ret: CompanyByPublication[]) => {

      for (let i = 0; i < ret.length; i++) {
        this.nbTotalCompany.push(ret[i].nbMat);
        this.barChartLabels.push(ret[i].publicationDesc);
      }

      this.dataPublication = {
        labels: this.barChartLabels,
        datasets: [{
          data: this.nbTotalCompany,
          label: 'Total Company by Description',
          backgroundColor: NbColorHelper.hexToRgbA('#335EFF', 0.8),
        }],
      };
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
