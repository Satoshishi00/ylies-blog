import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-amortissement',
  templateUrl: './tab-amortissement.component.html',
  styleUrls: ['./tab-amortissement.component.sass'],
})
export class TabAmortissementComponent implements OnInit {
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
    if (float) {
      return Math.round(float * 100) / 100;
    }
  }

  simulate(event) {
    event.preventDefault();

    // Récupération des infos du form
    const amount = Number(
      document.getElementById('amount')['value'].replace(/\s/g, '')
    );
    const time = document.getElementById('time')['value'];
    const annual_rate = document.getElementById('annual_rate')['value'];

    const nb_month = 12 * time;
    const the_rate = annual_rate / 100 / 12;
    const mensualRefundAmount = this.round(
      (amount * the_rate) / (1 - Math.pow(1 + the_rate, -nb_month))
    );

    //Tableaux capital restant
    let capitalReturnedMensual = [];
    let capitalToRefund = [];
    let interests = [];
    for (let i = 0; i < nb_month; i++) {
      if (i == 0) {
        interests.push(this.round(amount * the_rate));
        capitalReturnedMensual.push(
          this.round(mensualRefundAmount - interests[i])
        );
        capitalToRefund.push(this.round(amount - capitalReturnedMensual[i]));
      } else {
        interests.push(this.round(capitalToRefund[i - 1] * the_rate));
        capitalReturnedMensual.push(
          this.round(mensualRefundAmount - interests[i])
        );
        capitalToRefund.push(
          this.round(capitalToRefund[i - 1] - capitalReturnedMensual[i])
        );
      }
    }
    // Gestion de la dernière mensualité
    capitalReturnedMensual[nb_month - 1] = this.round(
      capitalToRefund[nb_month - 2]
    );
    capitalToRefund[nb_month - 1] = 0;

    // Calcul et récupération des tuples du tableau dans liste
    const liste = [];
    liste.push([
      'échéance',
      'capital restant',
      'mensualité dûe',
      'dont capital',
      'dont intérêts',
    ]);
    for (let i = 1; i < nb_month; i++) {
      liste.push([
        i,
        capitalToRefund[i - 1],
        mensualRefundAmount,
        capitalReturnedMensual[i - 1],
        interests[i - 1],
      ]);
    }
    liste.push([
      nb_month,
      capitalToRefund[nb_month - 1],
      this.round(
        capitalReturnedMensual[nb_month - 1] + interests[nb_month - 1]
      ),
      capitalReturnedMensual[nb_month - 1],
      interests[nb_month - 1],
    ]);

    // Création du tableau
    let table = document.getElementById('table');
    table.innerHTML = '';
    for (let i = 0; i < liste.length; i++) {
      let tr = document.createElement('tr');
      for (let item of liste[i]) {
        let td = document.createElement('td');
        // td.style.border = "1px solid black"
        td.textContent = item;
        tr.appendChild(td);
      }
      if (i % 2 == 0) {
        tr.style.backgroundColor = 'lightgrey';
      }
      table.appendChild(tr);
    }

    // Résumé du tableau
    let totalReturnSum = 0;
    let totalInterest = 0;
    for (let i = 1; i <= nb_month; i++) {
      totalReturnSum += parseFloat(liste[i][2]);
      totalInterest += parseFloat(liste[i][4]);
    }

    // Affichage du résumé

    document.getElementById('totalCreditCost').textContent = this.round(
      totalReturnSum
    ).toString();
    document.getElementById('interest').textContent = this.round(
      totalInterest
    ).toString();
    document.getElementById('abstract').style.display = 'flex';
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
