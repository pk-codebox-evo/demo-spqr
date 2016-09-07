import {TalksComponent} from './talks/talks.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: 'talks',  component: TalksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '/talks' }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});