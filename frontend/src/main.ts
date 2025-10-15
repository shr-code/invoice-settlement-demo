import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

//  Register all community features globally
ModuleRegistry.registerModules([AllCommunityModule]);

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
