/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { StatComponent } from './stat.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { StatBarLegalFormComponent } from './stat-bar-legalform.component';
import { StatBarDescriptionComponent } from './stat-bar-description.component';
import { StatBarPublicationComponent } from './stat-bar-publication.component';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    NgxChartsModule,
    NbCardModule,
    ChartModule,
  ],
  declarations: [
    StatBarLegalFormComponent,
    StatBarDescriptionComponent,
    StatBarPublicationComponent,
    StatComponent,
  ],
})
export class StatModule { }
