import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  title2 = 'Operaciones Trigonometricas';
  title3 = 'Raices';
  title4 = 'Logaritmo Natural';
  title5 = 'Operaciones Algebraicas'
  numero1: number = 0;
  numero2: number = 0;
  raiz1: number = 0;
  raiz2: number = 0;
  trigonometicas: number = 0;
  logaritmo: number = 0;
  resultado: number = 0;

  sumar(): void{
    this.resultado = this.numero1+this.numero2;
  }

  restar(): void{
    this.resultado = this.numero1-this.numero2;
  }

  multiplicar(): void{
    this.resultado = this.numero1*this.numero2;
  }

  dividir(): void{
    this.resultado = this.numero1/this.numero2;
  }

  secante(): void{
    this.resultado = 1 / Math.cos(this.trigonometicas);
  }

  cosecante(): void{
    this.resultado = 1 / Math.sin(this.trigonometicas);
  }

  cotangente(): void{
    this.resultado = 1 / Math.tan(this.trigonometicas);
  }

  pi(): void{
    this.resultado = Math.PI;
  }

  calcularRaiz(): void {
    if (this.raiz1 < 0 && this.raiz2 % 2 === 0) {
      console.error("No es posible calcular la raíz par de un número negativo.");
      return;
    }
  
    if (this.raiz2 === 0) {
      console.error("El índice no puede ser igual a 0.");
      return;
    }
  
    // Calcula la raíz en función del índice
    this.resultado = Math.pow(this.raiz1, 1 / this.raiz2);
  }

  logaritmoNatural(){
    this.resultado = Math.log(this.logaritmo);
  }

  eliminar(): void{
    this.resultado = 0;
  }
}
