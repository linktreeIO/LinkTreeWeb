import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { DefaultHeaderComponent } from './containers/default-header/default-header.component';
import { DefaultFooterComponent } from './containers/default-footer/default-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DefaultLayoutComponent, DefaultHeaderComponent, DefaultFooterComponent],
  exports: [DefaultLayoutComponent, DefaultHeaderComponent, DefaultFooterComponent]
})
export class FeatureLayoutsModule { }
