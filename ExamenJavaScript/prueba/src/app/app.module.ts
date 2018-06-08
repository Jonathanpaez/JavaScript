import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EntradaUnoComponent } from './entrada-uno/entrada-uno.component';
import {MatButtonModule} from '@angular/material/button';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {CardModule} from 'primeng/card';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import {TabViewModule} from 'primeng/tabview';
import { TalbaPrimeComponent } from './talba-prime/talba-prime.component';
import { CarruselAnimeComponent } from './carrusel-anime/carrusel-anime.component';
import {ChipsModule} from 'primeng/chips';
import {ButtonModule} from 'primeng/button';
import { EntradaDosComponent } from './entrada-dos/entrada-dos.component';
import { EquiposIngresadosComponent } from './equipos-ingresados/equipos-ingresados.component';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    EntradaUnoComponent,
    SimpleCardComponent,
    TalbaPrimeComponent,
    CarruselAnimeComponent,
    EntradaDosComponent,
    EquiposIngresadosComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgbModule,
    MatButtonModule,
    AccordionModule,
    CardModule,
    TabViewModule,
    ChipsModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
