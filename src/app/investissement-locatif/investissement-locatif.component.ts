import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investissement-locatif',
  templateUrl: './investissement-locatif.component.html',
  styleUrls: ['./investissement-locatif.component.sass'],
})
export class InvestissementLocatifComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let inputs_name = [
      'investissement_price',
      'notaire_price',
      'refreshing_price',
      'foncier',
      'copropriete',
      'loyer_mensuel',
      'charges_recuperables',
    ];

    // Réécriture montant input
    for (let input_name of inputs_name) {
      document.getElementById(input_name).addEventListener('keyup', (e) => {
        e.target['value'] = this.numStr(
          e.target['value'].replace(/\s/g, ''),
          ' '
        );
      });
    }
  }

  round(float: number) {
    return Math.round(float * 100) / 100;
  }

  //séapre par b les milliers du nombre a
  numStr(a, b) {
    a = '' + a;
    b = b || ' ';
    var c = '',
      d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (var i = a.length - 1; i >= 0; i--) {
      c = d != 0 && d % 3 == 0 ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  }

  simulate(): void {
    let inputs_name = [
      'investissement_price',
      'notaire_price',
      'refreshing_price',
      'foncier',
      'copropriete',
      'loyer_mensuel',
      'charges_recuperables',
    ];

    let inputs_value = [];

    //Récupération des informations du formulaire
    for (let input_name of inputs_name) {
      inputs_value[input_name] = Number(
        document.getElementById(input_name)['value'].replace(/\s/g, '')
      );
    }
    inputs_value['meublee'] = document.getElementById('meublee')['checked'];

    //Calculs
    let cout_achat =
      inputs_value['investissement_price'] +
      inputs_value['notaire_price'] +
      inputs_value['refreshing_price'];

    let entree_location = 12 * inputs_value['loyer_mensuel'];

    let revenu_frais_deduits =
      entree_location -
      inputs_value['foncier'] -
      inputs_value['charges_recuperables'] * 12;

    let impots_revenu = inputs_value['meublee']
      ? (0.17 * revenu_frais_deduits) / 2
      : 0.17 * revenu_frais_deduits;

    let total_frais_annuel =
      inputs_value['foncier'] + inputs_value['copropriete'] + impots_revenu;

    let revenu_annuel = entree_location - total_frais_annuel;

    //Affichage de la tranche
    document.getElementById(`cout_achat`).textContent = cout_achat.toString();
    document.getElementById(`entree_location`).textContent = this.round(
      entree_location
    ).toString();
    document.getElementById(`impots_revenu`).textContent = this.round(
      impots_revenu
    ).toString();
    document.getElementById(`total_frais_annuel`).textContent = this.round(
      total_frais_annuel
    ).toString();
    document.getElementById(`revenu_annuel`).textContent = this.round(
      revenu_annuel
    ).toString();
  }
}
