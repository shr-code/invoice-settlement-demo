import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};

// if you are facing  NullInjectorError: R3InjectorError(AppModule)[FireserviceService -> AngularFireDatabase -> AngularFireDatabase -> AngularFireDatabase]: 
  // NullInjectorError: No provider in angular 17 version just remove all HTTP client module imports and go to appconfig.ts file inside app file

// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideHttpClient()],
// };
// restart your application