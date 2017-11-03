import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavModule } from "./nav/nav.module";
import { BASE_PATH } from '../generated-api/index';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'write', loadChildren: 'app/write/write.module#WriteModule' },
  { path: '', loadChildren: 'app/home/home.module#HomeModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NavModule
  ],
  providers: [{provide: BASE_PATH, useValue: 'http://localhost:8080/ematrat/book/1.0.0' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
