import {TalksComponent} from './talks/talks.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {Routes, RouterModule} from "@angular/router";
import {TalkComponent} from "./talk/talk.component";

const appRoutes: Routes = [
  { path: 'talks',  component: TalksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'talk/:id', component: TalkComponent },
  { path: '**', redirectTo: '/talks' }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});