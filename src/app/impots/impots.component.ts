import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impots',
  templateUrl: './impots.component.html',
  styleUrls: ['./impots.component.sass'],
})
export class ImpotsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.getElementById('amount').addEventListener('keyup', (e) => {
      console.log(e.target['value']);
      e.target['value'] = this.numStr(
        e.target['value'].replace(/\s/g, ''),
        ' '
      ).toString();
    });
  }

  round(float: number) {
    return Math.round(float * 100) / 100;
  }

  simulate(): void {
    let tranches = [10064, 25659, 73369, 157806];
    let tranches_coeff = [0.11, 0.3, 0.41, 0.45];
    let tranches_impot = [0, 0, 0, 0, 0];

    let amount_brut = Number(
      document.getElementById('amount')['value'].replace(/\s/g, '')
    );

    console.log(amount_brut);
    let parts = document.getElementById('parts')['value'];

    let amount = amount_brut / parts;

    // On atteind la deuxième tranche imposable donc on paie le max d'imposition sur la première
    if (amount > tranches[1]) {
      // On atteind le maximum imposable sur la première tranche d'imposition (tranches[1] - tranches[0])
      tranches_impot[1] = (tranches[1] - tranches[0]) * tranches_coeff[0];
      if (amount > tranches[2]) {
        // On atteind le maximum imposable sur la deuxième tranche d'imposition (tranches[2] - tranches[1])
        tranches_impot[2] = (tranches[2] - tranches[1]) * tranches_coeff[1];
        if (amount > tranches[3]) {
          // On atteind le maximum imposable sur la troisième tranche d'imposition (tranches[3] - tranches[2])
          tranches_impot[3] = (tranches[3] - tranches[2]) * tranches_coeff[2];

          // Et on attein la quatrième tranche dans laquelle il y a tout se qui dépasse
          tranches_impot[4] = (amount - tranches[3]) * tranches_coeff[3];
        } else {
          //On atteind la troisième tranche mais pas la quatrième
          tranches_impot[3] = (amount - tranches[2]) * tranches_coeff[2];
        }
      } else {
        //On atteind la deuxième tranche mais pas la troisième
        tranches_impot[2] = (amount - tranches[1]) * tranches_coeff[1];
      }
    } else {
      //On attein pas la seconde tranche d'imposition, donc on pait ce qui dépasse de la première tranche au taux de la première
      tranches_impot[1] = (amount - tranches[0]) * tranches_coeff[0];
    }

    //On calcule le total des
    let total_impot = 0;

    for (let i = 1; i < tranches_impot.length; i++) {
      tranches_impot[i] = this.round(tranches_impot[i]);

      total_impot += tranches_impot[i];

      //Affichage de la tranche
      document.getElementById(`tranche-${i}`).textContent = tranches_impot[
        i
      ].toString();
    }

    //Affichage du total
    document.getElementById(
      'total-amount'
    ).textContent = total_impot.toString();
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
}
