import { __decorate } from "tslib";
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
        ],
        providers: [],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map