//main entry point
import 'zone.js';
import 'reflect-metadata';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {db} from 'baqend/streaming';
import {AppModule} from './app.module';

db.connect('spqr', true).then(() => platformBrowserDynamic().bootstrapModule(AppModule));