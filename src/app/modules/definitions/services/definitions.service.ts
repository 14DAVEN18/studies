import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService {

  private readonly definitions: Record<string, { name: string, definition: string }> = {
    'asynchronous': 
    {
      name: 'asíncrono', 
      definition: 'Son operaciones que se pueden ejecutar independientemente del flujo principal del programa. Estas operaciones no bloquean la ejecución de otras tareas permitiendo '
                + 'al programa correr mientras se espera a completar la tarea asíncrona.'
    }
  }

  constructor() { }

  public getDefinition(key: string): { name: string, definition: string } {
    return this.definitions[key]
  }
}
