/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../interfaces/common/users';
import { UsersService } from './services/users.service';
import { UsersApi } from './api/users.api';
import { HttpService } from './api/http.service';
import { CountryData } from '../../interfaces/common/countries';
import { CountriesService } from './services/countries.service';
import { CountriesApi } from './api/countries.api';
import { SettingsApi } from './api/settings.api';
import { NbAuthModule } from '@nebular/auth';
import { SettingsData } from '../../interfaces/common/settings';
import { SettingsService } from './services/settings.service';
import { StatsService } from './services/stats.service';
import { GenericsService } from './services/generics.service';
import { CompaniesService } from './services/companies.services';
import { StatsAPI } from './api/stats.api';
import { GenericsAPI } from './api/generics.api';
import { CompaniesAPI } from './api/companies.api';

const API = [UsersApi, CountriesApi, SettingsApi,  HttpService, StatsAPI, GenericsAPI, CompaniesAPI];

const SERVICES = [
  { provide: UserData, useClass: UsersService },
  { provide: CountryData, useClass: CountriesService },
  { provide: SettingsData, useClass: SettingsService },
  { provide: StatsService, useClass: StatsService },
  { provide: GenericsService, useClass: GenericsService },
  { provide: CompaniesService, useClass: CompaniesService },
];

@NgModule({
  imports: [CommonModule, NbAuthModule],
})
export class CommonBackendModule {
  static forRoot(): ModuleWithProviders<CommonBackendModule> {
    return {
      ngModule: CommonBackendModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
