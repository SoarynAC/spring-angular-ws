import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListagemComponent,
    VendaCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TableModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
