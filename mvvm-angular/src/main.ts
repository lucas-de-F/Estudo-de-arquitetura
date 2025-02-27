import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { VMComponent } from './app/VMComponent';

bootstrapApplication(VMComponent, appConfig)
  .catch((err) => console.error(err));
