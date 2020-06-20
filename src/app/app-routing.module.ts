import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MacadamComponent } from './macadam/macadam.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';
import { ContactComponent } from './contact/contact.component';
import { TabAmortissementComponent } from './tab-amortissement/tab-amortissement.component';
import { ImpotsComponent } from './impots/impots.component';
import { InvestissementLocatifComponent } from './investissement-locatif/investissement-locatif.component';
import { FraisNotaireComponent } from './frais-notaire/frais-notaire.component';
import { BrutNetComponent } from './brut-net/brut-net.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: "Le blog d'Yliès Rochdi",
      description: 'Concepteur développeur web',
      ogUrl: 'https://ylies.xyz',
      ogImage: 'https://ylies.xyz/assets/ylies-web.png',
      keywords:
        'Yliès, Ylies, Rochdi, Blog, Projets, Outils, Développeur, Web, Concepteur, ylies.xyz',
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projets informatique',
      description: 'Découvrez certains de mes projets',
      ogUrl: 'https://ylies.xyz/projects/',
      ogImage: 'https://ylies.xyz/assets/brainers.png',
      keywords:
        'brainers.xyz, Brainer, Brainers, Faites de la musique, Faitesdelamusique, assofaitesdelamusique, rochdimaths, macadam, horticulture-duffaut, horticulture, duffaut,horticulture-duffaut.xyz, assofaitesdelamusique.fr, rochdimaths.com, ylies',
    },
  },
  {
    path: 'tools',
    component: ToolsComponent,
    data: {
      title: 'Outils',
      description: 'Divers outils',
      ogUrl: 'https://ylies.xyz/tools/',
      ogImage: 'https://ylies.xyz/tools/sigma.png',
      keywords:
        'revenu, impôts, amortissement, prêt, banque, emprunt, frais, coût, cout, notaire, notariaux, notarié, mensualité, calcul, tableau, investissement, rentabilité, immobilier, locatif, location, immobilière, outils, ylies',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact',
      description: 'Contactez-moi !',
      ogUrl: 'https://ylies.xyz/contact/',
      ogImage: 'https://ylies.xyz/assets/ylies-web.png',
      keywords:
        'contact, contactez, mail, ylies, rochdi, question, demande, information, ylies.xyz',
    },
  },
  {
    path: 'macadam',
    component: MacadamComponent,
    data: {
      title: 'Macadam',
      description: 'Jeu de plateau sur terminal',
      ogUrl: 'https://ylies.xyz/macadam/',
      ogImage: 'https://ylies.xyz/assets/macadam.png',
      keywords:
        'jeu, plateau, macadam, terminal, université paul sabatier, projet, ylies',
    },
  },
  {
    path: 'tableau-amortissement',
    component: TabAmortissementComponent,
    data: {
      title: "Tableau d'amortissement",
      description: "Essayez mon tableau d'amortissement réaliser vos projets",
      ogUrl: 'https://ylies.xyz/tableau-amortissement/',
      ogImage: 'https://ylies.xyz/assets/sigma.png',
      keywords:
        'tableau, amortissement, mensualité, calcul, amortir, amortissement, investissement, achat, prêt, emprunt, banque, banquaire, simulateur, ylies',
    },
  },
  {
    path: 'impots-revenu',
    component: ImpotsComponent,
    data: {
      title: 'Impôts sur le revenu',
      description: 'Estimez vos impôts sur le revenu',
      ogUrl: 'https://ylies.xyz/impots-revenu/',
      ogImage: 'https://ylies.xyz/assets/sigma.png',
      keywords:
        'impôts, impots, revenu, calcul, déterminer, outil, simulateur, ylies',
    },
  },
  {
    path: 'investissement-locatif',
    component: InvestissementLocatifComponent,
    data: {
      title: 'Simulateur investissement locatif',
      description:
        "Simulez la rentabilité d'un projet d'investissement locatif",
      ogUrl: 'https://ylies.xyz/investissement-locatif/',
      ogImage: 'https://ylies.xyz/assets/sigma.png',
      keywords:
        'simulateur, investissement, locatif, location, calculer, rentabilité, ylies',
    },
  },
  {
    path: 'frais-notaire',
    component: FraisNotaireComponent,
    data: {
      title: 'Simulateur frais de notaire',
      description:
        "Estimez le coût des frais de notaire d'un achat immobilier en France",
      ogUrl: 'https://ylies.xyz/frais-notaire/',
      ogImage: 'https://ylies.xyz/assets/sigma.png',
      keywords:
        'simulateur, frais, notaire, notariaux, notariés, achat, immobilier, france, acte, estimer, déterminer, cout, coût, calcul, ylies',
    },
  },
  {
    path: 'salaire-brut-net',
    component: BrutNetComponent,
    data: {
      title: 'Salaire brut en net',
      description: 'Convertissez votre salaire brut en net',
      ogUrl: 'https://ylies.xyz/salaire-brut-net/',
      ogImage: 'https://ylies.xyz/assets/sigma.png',
      keywords:
        'simulateur, salaire, paie, brut, net, annuel, horaire, mensuel, taux, convertisseur, convertir, déterminer, estimer, estimation, calcul, smic, 2020, ylies, rochdi',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
