import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MacadamComponent } from './macadam/macadam.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';
import { ContactComponent } from './contact/contact.component';
import { TabAmortissementComponent } from './tab-amortissement/tab-amortissement.component';
import { ImpotsComponent } from './impots/impots.component';
import { InvestissementLocatifComponent } from './investissement-locatif/investissement-locatif.component';
import { FraisNotaireComponent } from './frais-notaire/frais-notaire.component';
const routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'tools', component: ToolsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'macadam', component: MacadamComponent },
    {
        path: 'tableau-amortissement',
        component: TabAmortissementComponent,
        data: {
            title: "Tableau d'amortissement",
            description: "Essayez mon tableau d'amortissement réaliser vos projets",
            ogUrl: 'https://ylies.xyz/tableau-amortissement/',
            ogImage: 'https://ylies.xyz/assets/sigma.png',
            keywords: "tableau d'amortissement, calcul de mensualités, amortir un investissement, calcul de prêt, prêt banquaire, taux d'intérêt, calcul ylies",
        },
    },
    { path: 'impots-revenu', component: ImpotsComponent },
    { path: 'investissement-locatif', component: InvestissementLocatifComponent },
    { path: 'frais-notaire', component: FraisNotaireComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map