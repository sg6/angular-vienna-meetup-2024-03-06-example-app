import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { networkAnalysisInterceptor } from './interceptors/network-analysis.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { cachingInterceptor } from './interceptors/caching.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      cachingInterceptor,
      networkAnalysisInterceptor,
      loadingInterceptor,
    ])),

  ]
};
