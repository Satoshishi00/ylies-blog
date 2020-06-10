import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impots',
  templateUrl: './impots.component.html',
  styleUrls: ['./impots.component.sass'],
})
export class ImpotsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  round(float: number) {
    return Math.round(float * 100) / 100;
  }

  simulate(): void {
    let tranches = [10064, 25659, 73369, 157806];
    let tranches_coeff = [0.11, 0.3, 0.41, 0.45];
    let tranches_impot = [0, 0, 0, 0, 0];

    let amount_brut = document.getElementById('amount')['value'];
    let parts = document.getElementById('parts')['value'];

    let amount = amount_brut / parts;

    if (amount > tranches[0]) {
      //On atteind le max de non imposition
      // tranches_impot[0] = tranches[0];
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
        //On atteind la première tranche d'imposition mais pas la seconde
        tranches_impot[1] = (amount - tranches[0]) * tranches_coeff[0];
      }
    } else {
      //On n'attein pas la première tranche d'imposition
      // tranches_impot[0] = amount;
    }

    //On arrondi de toutes les tranches
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
}
