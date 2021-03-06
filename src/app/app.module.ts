import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MacadamComponent } from './macadam/macadam.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabAmortissementComponent } from './tab-amortissement/tab-amortissement.component';
import { ImpotsComponent } from './impots/impots.component';
import { InvestissementLocatifComponent } from './investissement-locatif/investissement-locatif.component';
import { FraisNotaireComponent } from './frais-notaire/frais-notaire.component';
import { BrutNetComponent } from './brut-net/brut-net.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MacadamComponent,
    ProjectsComponent,
    ToolsComponent,
    ContactComponent,
    TabAmortissementComponent,
    ImpotsComponent,
    InvestissementLocatifComponent,
    FraisNotaireComponent,
    BrutNetComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
