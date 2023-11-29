import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-post/active-post.component';
import { InactivePostsComponent } from './inactive-post/inactive-post.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'activePosts',
    component: ActivePostsComponent,
  },
  {
    path: 'inactivePosts',
    component: InactivePostsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
