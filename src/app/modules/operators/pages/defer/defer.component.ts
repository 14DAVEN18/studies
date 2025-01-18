import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { defer, Observable } from 'rxjs';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.sass'
})
export class DeferComponent {
  currentTime$: Observable<string>

  public message: string = 'No suscrito'
  private value: string = ''
  public observableCreationCounter: number = 0

  constructor() {
    this.currentTime$ = defer(() => {
      console.log("Observable creado")
      this.observableCreationCounter++
      return Promise.resolve(new Date().toISOString())
    })
  }

  ngOnInit(): void {
    this.subscribeToCurrentTime()
  }

  public subscribeToCurrentTime() {
    this.message = 'No suscrito'
    this.message = 'Suscribiendo...'
    this.value = ''
    this.currentTime$.subscribe({
      next: (value) => {
        console.log(value)
        this.value = value
      },
      complete: () => this.message = `[#Observador ${this.observableCreationCounter}] Suscriptor inmediato: ${this.value}`
    })
  }

  public subscribeToCurrentTimeLater() {
    this.message = 'No suscrito'
    this.message = 'Suscribiendo...'
    this.value = ''
    setTimeout(() => {
      this.currentTime$.subscribe({
        next: (value) => {
          console.log(value)
          this.value = value
        },
        complete: () => this.message = `[#Observador ${this.observableCreationCounter}] Suscriptor retrasado: ${this.value}`
      })
    }, 2000)
  }
}