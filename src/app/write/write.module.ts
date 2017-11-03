import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteComponent } from './write/write.component';
import { Routes, RouterModule } from '@angular/router';

const writeRoutes: Routes = [
  { path: '', component: WriteComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(writeRoutes)
  ],
  declarations: [WriteComponent]
})
export class WriteModule { }
