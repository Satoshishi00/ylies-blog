import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FraisNotaireComponent = class FraisNotaireComponent {
    constructor() { }
    ngOnInit() { }
    round(float) {
        return Math.round(float * 100) / 100;
    }
    //séapre par b les milliers du nombre a
    numStr(a, b) {
        a = '' + a;
        b = b || ' ';
        var c = '', d = 0;
        while (a.match(/^0[0-9]/)) {
            a = a.substr(1);
        }
        for (var i = a.length - 1; i >= 0; i--) {
            c = d != 0 && d % 3 == 0 ? a[i] + b + c : a[i] + c;
            d++;
        }
        return c;
    }
    emolument_notaire(amount) {
        let tranches = [6500, 17000, 60000];
        let tranches_coeff = [0.03945, 0.01627, 0.01085, 0.00814];
        let tranches_emolument = [0, 0, 0, 0, 0];
        //On dépasse la première tranche
        if (amount > tranches[0]) {
            tranches_emolument[0] = tranches[0] * tranches_coeff[0];
            //On dépasse la seconde tranche
            if (amount > tranches[1]) {
                tranches_emolument[1] = (tranches[1] - tranches[0]) * tranches_coeff[1];
                //On dépasse la troisième tranche
                if (amount > tranches[2]) {
                    tranches_emolument[2] =
                        (tranches[2] - tranches[1]) * tranches_coeff[2];
                    // Et on attein la quatrième tranche dans laquelle il y a tout se qui dépasse
                    tranches_emolument[3] = (amount - tranches[2]) * tranches_coeff[3];
                }
                else {
                    //On atteind la deuxième tranche mais pas la troisième
                    tranches_emolument[2] = (amount - tranches[1]) * tranches_coeff[1];
                }
            }
            else {
                //On atteind la première tranche d'imposition mais pas la seconde
                tranches_emolument[1] = (amount - tranches[0]) * tranches_coeff[1];
            }
        }
        else {
            //On n'attein pas la première tranche d'imposition
            tranches_emolument[0] = amount * tranches_coeff[0];
        }
        let total = 0;
        for (let i = 0; i < tranches_emolument.length; i++) {
            total += tranches_emolument[i];
            console.log(tranches_emolument[i]);
        }
        console.log('total emolument notaire', total);
        return total;
    }
    simulate() {
        //Récupération des informations du formulaire
        let investissement_price = Number(document
            .getElementById('investissement_price')['value'].replace(/\s/g, ''));
        let departement = Number(document.getElementById('departement')['value'].trim());
        let departements_rabais = [36, 38, 56, 976];
        let taux_droits_mutation = departements_rabais.includes(departement)
            ? 5.09006
            : 5.80665;
        let isNeuf = document.getElementById('neuf')['checked'];
        //Calculs
        let droits_mutation = investissement_price * (taux_droits_mutation / 100);
        let emolument_notaire = this.emolument_notaire(investissement_price) * 1.2;
        let emolument_formalite = 800;
        let frais_divers = 400;
        let securite_immobiliere = investissement_price * 0.001 < 15 ?  : ;
        let total_frais_notaire = droits_mutation +
            emolument_notaire +
            emolument_formalite +
            frais_divers +
            securite_immobiliere;
        //Affichage de la tranche
        document.getElementById(`droits_mutation`).textContent = this.round(droits_mutation).toString();
        document.getElementById(`emolument_notaire`).textContent = this.round(emolument_notaire).toString();
        document.getElementById(`emolument_formalite`).textContent = this.round(emolument_formalite).toString();
        document.getElementById(`frais_divers`).textContent = this.round(frais_divers).toString();
        document.getElementById(`securite_immobiliere`).textContent = this.round(securite_immobiliere).toString();
        document.getElementById(`total_frais_notaire`).textContent = this.round(total_frais_notaire).toString();
    }
};
FraisNotaireComponent = __decorate([
    Component({
        selector: 'app-frais-notaire',
        templateUrl: './frais-notaire.component.html',
        styleUrls: ['./frais-notaire.component.sass'],
    })
], FraisNotaireComponent);
export { FraisNotaireComponent };
//# sourceMappingURL=frais-notaire.component.js.map