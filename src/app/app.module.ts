import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HalamanSatuComponent } from './halaman-satu/halaman-satu.component';
import { HalamanDuaComponent } from './halaman-dua/halaman-dua.component';

@NgModule({
  declarations: [
    AppComponent,
    HalamanSatuComponent,
    HalamanDuaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
