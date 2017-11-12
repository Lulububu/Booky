import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent, ConnectComponent],
  exports: [MenuComponent]
})
export class NavModule { }
