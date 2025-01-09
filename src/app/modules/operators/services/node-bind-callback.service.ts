import { Injectable } from '@angular/core';
import { bindNodeCallback } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeBindCallbackService {

  // Simula una API callback de estilo Node.js
  private mockCallbackFunction(param: string, callback: (err: Error | null, result?: string) => void) {
    setTimeout(() => {
      if (param === 'error') {
        callback(new Error('Something went wrong!'));
      } else {
        callback(null, `Result is: ${param}`);
      }
    }, 1000);
  }

  // Usa bindCallback para convertir la función en un Observable
  getObservable(param: string) {
    const observableFactory = bindNodeCallback(this.mockCallbackFunction.bind(this));
    return observableFactory(param);
  }

  constructor() { }
}
