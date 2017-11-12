import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavModule } from "./nav/nav.module";
import { BASE_PATH } from '../generated-api/index';
import { AuthGuard } from './shared/authent/auth-guard.service';
import { AuthRequestOptions } from './shared/authent/auth-request.options';
import { AuthErrorHandler } from './shared/authent/auth-error.handler';
import { AuthentModule } from './shared/authent/authent.module';

const appRoutes: Routes = [
  { path: 'write', loadChildren: 'app/write/write.module#WriteModule', canActivate: [AuthGuard] },
  { path: '', loadChildren: 'app/home/home.module#HomeModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthentModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NavModule
  ],
  providers: [
    {
      provide: BASE_PATH,
      useValue: 'http://localhost:8080/ematrat/book/1.0.0'
    },
    {
      provide: RequestOptions,
      useClass: AuthRequestOptions
    },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
