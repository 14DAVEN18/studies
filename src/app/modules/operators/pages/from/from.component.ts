import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from.component.html',
  styleUrl: './from.component.sass'
})
export class FromComponent {

  private array: number[] = [10, 20, 30, 40, 50]
  private result = from(this.array)

  private stringArray: string = 'Esta es una frase'
  private stringResult = from(this.stringArray)

  public emittedValues: number[] =  []
  public emittedStringValues: String[] = []

  ngOnInit() {
    this.result.subscribe({
      next: (element) => this.emittedValues.push(element),
      error: (error) => console.error("Error: ", error),
      complete: () => console.log("Completado!")
    })

    this.stringResult.subscribe({
      next: (element) => this.emittedStringValues.push(element),
      error: (error) => console.error("Error: ", error),
      complete: () => console.log("Completado!")
    })
  }
}
