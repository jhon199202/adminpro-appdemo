import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Firmantes', 'Autorizadores', 'Validadores'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'Reporte de Tipos de Clientes'
    },
    'grafico2': {
      'labels': ['Validados', 'Autorizados'],
      'data':  [10, 12],
      'type': 'doughnut',
      'leyenda': 'Reporte de Avance Validación'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [5, 24],
      'type': 'doughnut',
      'leyenda': '¿Perfil completado?'
    },
    'grafico4': {
      'labels': ['Completado', 'Incompleto'],
      'data':  [3, 42],
      'type': 'doughnut',
      'leyenda': 'Reporte de status de revisión'
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
