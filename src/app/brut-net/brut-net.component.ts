import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brut-net',
  templateUrl: './brut-net.component.html',
  styleUrls: ['./brut-net.component.sass'],
})
export class BrutNetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let fields = [
      'horaire-brut',
      'horaire-net',
      'mensuel-brut',
      'mensuel-net',
      'annuel-brut',
      'annuel-net',
    ];

    for (let field of fields) {
      document.getElementById(field).addEventListener('keyup', (e) => {
        let amount = e.target['value'];
        this.calculOtherFields(field, amount);
      });
    }
  }

  calculOtherFields(name, amount) {
    //Détermination du montant annuel brut
    let annuel_brut = 0;
    switch (name) {
      case 'horaire-brut':
        annuel_brut = amount * 151.67 * 12;
        break;
      case 'horaire-net':
        annuel_brut = amount * 1.2987013 * 151.67 * 12;
        break;
      case 'mensuel-brut':
        annuel_brut = amount * 12;
        break;
      case 'mensuel-net':
        annuel_brut = amount * 12 * 1.2987013;
        break;
      case 'annuel-brut':
        annuel_brut = amount;
        break;
      case 'annuel-net':
        annuel_brut = amount * 1.2987013;
        break;
      default:
        console.log('error : input calculOtherFiels');
    }

    console.log('calculOtherField', annuel_brut);

    //Détermination de tous les autres montant à partir de l'anneul brut
    let annuel_net = 0.77 * annuel_brut;
    let mensuel_brut = annuel_brut / 12;
    let mensuel_net = annuel_net / 12;
    let horaire_brut = mensuel_brut / 151.67;
    let horaire_net = mensuel_net / 151.67;

    let fields = {
      'horaire-brut': horaire_brut,
      'horaire-net': horaire_net,
      'mensuel-brut': mensuel_brut,
      'mensuel-net': mensuel_net,
      'annuel-brut': annuel_brut,
      'annuel-net': annuel_net,
    };

    //Remplissage des champs
    for (let index in fields) {
      (<HTMLInputElement>document.getElementById(index)).value = this.round(
        fields[index]
      ).toString();
    }
  }

  //Arrondi au centième
  round(float: number) {
    return Math.round(float * 100) / 100;
  }
}
