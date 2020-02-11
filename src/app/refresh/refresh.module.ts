import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RefreshPageRoutingModule } from './refresh-routing.module';
import { RefreshPage } from './refresh.page';
import { FivLoadingContentModule  } from '@fivethree/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivLoadingContentModule,
    RefreshPageRoutingModule
  ],
  declarations: [RefreshPage]
})
export class RefreshPageModule {}
