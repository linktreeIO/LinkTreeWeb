import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import {FeatureLayoutsModule} from '../feature-layouts/feature-layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureLayoutsModule
  ],
  declarations: [HomeContainerComponent]
})
export class FeatureHomeModule { }
