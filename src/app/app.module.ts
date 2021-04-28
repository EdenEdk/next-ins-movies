import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';

import {AppComponent} from './components/app-component/app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {APP_COMPONENTS} from './components/components';
import {AppEffects, AppState} from './store/store';
import {HttpClientModule} from '@angular/common/http';
import {APP_PIPES} from './pipes/pipes';

@NgModule({
  declarations: [AppComponent, ...APP_COMPONENTS, ...APP_PIPES],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(AppState),
    EffectsModule.forRoot(AppEffects),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
