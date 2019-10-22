
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import {NgxMaskModule} from 'ngx-mask-2'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoComponent } from './calculo/calculo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { Options } from 'selenium-webdriver/firefox';

@NgModule({
  declarations: [
    AppComponent,
    CalculoComponent,
    ConsultaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    LayoutModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
