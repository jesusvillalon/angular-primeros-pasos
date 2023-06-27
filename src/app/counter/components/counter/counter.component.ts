import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter(10)">reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent {

    public counter: number = 10;

  // void --> Cuando no regresa nada.
  increaseBy(value: number): void {
    this.counter += value
  }

  resetCounter(value: number): void {
    this.counter = value;
  }


}
