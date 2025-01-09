import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService {

  private readonly definitions: Record<string, { name: string, definition: string }> = {
    'ajax request':
    {
      name: 'petición AJAX',
      definition: 'Una solicitud AJAX (Asynchronous Javascript and XML) es una forma para que una aplicación web se comunique con un servidor en segundo plano, sin recargar toda la '
                + 'página web. Esta técnica permite aplicaciones web dinámicas, rápidas y reponsivas mediante la actualización de partes de una página web asíncronamente.'
    },
    'callback api':
    {
      name: 'API Callback',
      definition: 'Un API basada en callbacks es un enfoque de programación en el cual se pasa una función (llamada "callback") como argumento a otra función. Esta función callback es '
                + 'invocada luego de que cierta tarea es terminada o cuando ocurre un evento.'
    },
    'asynchronous': 
    {
      name: 'asíncrono', 
      definition: 'Son operaciones que se pueden ejecutar independientemente del flujo principal del programa. Estas operaciones no bloquean la ejecución de otras tareas permitiendo '
                + 'al programa correr mientras se espera a completar la tarea asíncrona.'
    },
    'observable':
    {
      name: 'observable',
      definition: 'Un observable es un flujo de datos que se puede "observar". Es una herramienta usada en programación reactiva para manejar eventos asincronos como datos llegando en '
                + 'el tiempo.'
    },
    'subscription':
    {
      name: 'suscripción',
      definition: 'Una suscripción es como yo puedo empezar a recibir datos del observable. Cuando me suscribo a un observable, empieza a enviar datos al observador (la parte del ('
                + 'código que dice que se hace con esos datos). Sin una suscripción, el observable no hace nada, es perezoso y espera a que alguien se suscriba.'
    }
  }

  constructor() { }

  public getDefinition(key: string): { name: string, definition: string } {
    return this.definitions[key]
  }
}
