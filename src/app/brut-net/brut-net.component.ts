import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brut-net',
  templateUrl: './brut-net.component.html',
  styleUrls: ['./brut-net.component.sass'],
})
export class BrutNetComponent implements OnInit {
  field_input_name = '';
  field_input_amount = 0;
  contrat_rate = 0;

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
        this.field_input_name = field;
        this.field_input_amount = e.target['value'];
        this.contrat_rate = this.determineContratName();
        this.calculOtherFields(
          field,
          this.field_input_amount,
          this.contrat_rate
        );
      });
    }

    this.listenerContratChangement();
  }

  determineContratName() {
    let contrats = {
      'salarie-non-cadre': 0.22,
      'salarie-cadre': 0.25,
      'fonction-publique': 0.15,
      liberale: 0.45,
      portage: 0.51,
    };

    let contratRate = 0;
    for (let contratName in contrats) {
      contratRate = document.getElementById(contratName)['checked']
        ? contrats[contratName]
        : contratRate;
    }

    return contratRate;
  }

  listenerContratChangement() {
    let contrats = {
      'salarie-non-cadre': 0.22,
      'salarie-cadre': 0.25,
      'fonction-publique': 0.15,
      liberale: 0.45,
      portage: 0.51,
    };

    for (let contrat in contrats) {
      document.getElementById(contrat).addEventListener('click', (e) => {
        this.contrat_rate = contrats[contrat];

        this.calculOtherFields(
          this.field_input_name,
          this.field_input_amount,
          this.contrat_rate
        );
      });
    }
  }

  calculOtherFields(name, amount, contratRate) {
    //Détermination du montant annuel brut
    let annuel_brut = 0;
    switch (name) {
      case 'horaire-brut':
        annuel_brut = amount * 151.67 * 12;
        break;
      case 'horaire-net':
        annuel_brut = ((amount * 1) / (1 - contratRate)) * 151.67 * 12;
        break;
      case 'mensuel-brut':
        annuel_brut = amount * 12;
        break;
      case 'mensuel-net':
        annuel_brut = (amount * 12 * 1) / (1 - contratRate);
        break;
      case 'annuel-brut':
        annuel_brut = amount;
        break;
      case 'annuel-net':
        annuel_brut = (amount * 1) / (1 - contratRate);
        break;
      default:
        console.log('error : input calculOtherFiels');
    }

    console.log('calculOtherField', annuel_brut);

    //Détermination de tous les autres montant à partir de l'anneul brut
    let annuel_net = (1 - contratRate) * annuel_brut;
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

  displaySmic() {
    document.getElementById('salarie-non-cadre')['checked'] = true;
    this.field_input_name = 'horaire-brut';
    this.field_input_amount = 10.15;
    this.contrat_rate = 0.22;
    this.calculOtherFields(
      this.field_input_name,
      this.field_input_amount,
      this.contrat_rate
    );
  }
}
