import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { ProductComponent } from './product.component';
import { ProductFeatureKey, reducer } from './store/reducer/product.reducer';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, StoreModule.forFeature(ProductFeatureKey, reducer)],
})
export class ProductModule {}
