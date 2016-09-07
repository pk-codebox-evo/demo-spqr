//main entry point

import 'zone-js';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {db} from 'baqend';
import {AppModule} from './app.module';

db.connect('spqr', false, function() {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
