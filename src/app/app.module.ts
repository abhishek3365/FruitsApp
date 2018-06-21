import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { StoreModule } from '@ngrx/store';

import { reducers } from './app.reducers';

import { FruitsListComponent } from './fruits-list/fruits-list.component';

@NgModule({
  declarations: [
    FruitsListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  entryComponents: [FruitsListComponent]
})
export class FruitListModule {

  constructor(private injector: Injector) {
    const productView = createCustomElement(FruitsListComponent, { injector });
    customElements.define('fruit-list', productView);
  }

  ngDoBootstrap() {}
}
