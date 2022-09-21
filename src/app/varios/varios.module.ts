import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VariosPageRoutingModule } from './varios-routing.module';

import { VariosPage } from './varios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VariosPageRoutingModule
  ],
  declarations: [VariosPage]
})
export class VariosPageModule {}
