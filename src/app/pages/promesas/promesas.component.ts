import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      (resp) => console.log('terminó ', resp)
    ).catch(error => console.error('Error en la promesa', error));
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean>{
     return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        console.log(contador);
        if(contador === 3){
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
