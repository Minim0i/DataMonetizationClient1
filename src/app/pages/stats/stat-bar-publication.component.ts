/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-stat-bar-publication',
  template: `<chart type="bar" [data]="data"></chart>`,
})
export class StatBarPublicationComponent implements OnDestroy {

  public data = {};
  public barChartLabels: string[] = [];
  colorScheme: any;
  themeSubscription: any;

  @Input('data')
  set dataValue(value: []) {
    this.data = value;
  }

  constructor(private theme: NbThemeService) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });

  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
