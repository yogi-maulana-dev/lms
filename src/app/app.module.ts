import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HalamanSatuComponent } from './halaman-satu/halaman-satu.component';
import { HalamanDuaComponent } from './halaman-dua/halaman-dua.component';
import { AppRoutingModule } from './app-routing.module';
import { HalamanUtamaComponent } from './halaman-utama/halaman-utama.component';

@NgModule({
  declarations: [
    AppComponent,
    HalamanSatuComponent,
    HalamanDuaComponent,
    HalamanUtamaComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
