import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { AuthentModule } from './authent/authent.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsComponent],
  exports: [NewsComponent, AuthentModule]
})
export class SharedModule { }
