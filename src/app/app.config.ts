import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';

import locale from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';

registerLocaleData(locale, 'es-CO')


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(reducers, {metaReducers}),  ]
};
