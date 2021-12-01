import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdmComponent } from './categoria/adm/adm.component';
import { AutoajudaComponent } from './categoria/autoajuda/autoajuda.component';
import { HomeComponent } from './home/home.component';
import { BiografiasComponent } from './categoria/biografias/biografias.component';
import { ArtefotoComponent } from './categoria/artefoto/artefoto.component';
import { LitinterComponent } from './categoria/litinter/litinter.component';
import { LitbraComponent } from './categoria/litbra/litbra.component';
import { HistoriaComponent } from './categoria/historia/historia.component';
import { PsicologiaComponent } from './categoria/psicologia/psicologia.component';
import { ReligiaoComponent } from './categoria/religiao/religiao.component';
import { SuspenseComponent } from './categoria/suspense/suspense.component';
import { TerrorComponent } from './categoria/terror/terror.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AdmComponent,
    AutoajudaComponent,
    HomeComponent,
    BiografiasComponent,
    ArtefotoComponent,
    LitinterComponent,
    LitbraComponent,
    HistoriaComponent,
    PsicologiaComponent,
    ReligiaoComponent,
    SuspenseComponent,
    TerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
