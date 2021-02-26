import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Moneda } from './moneda';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent implements OnInit {

  monedas : Moneda [] = [
    { codigoMoneda : 1 , abreviaturaMoneda : 'bs', descripcionMoneda : 'moneda nacional', fechaRegistro : '2021-01-12'},
    { codigoMoneda : 2 , abreviaturaMoneda : 'Sus', descripcionMoneda : 'moneda extranjera', fechaRegistro : '2021-01-12'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
