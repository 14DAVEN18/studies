import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NodeBindCallbackService } from '@modules/operators/services/node-bind-callback.service';
import { bindNodeCallback } from 'rxjs';

@Component({
  selector: 'app-node-bind-callback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node-bind-callback.component.html',
  styleUrl: './node-bind-callback.component.sass'
})
export class NodeBindCallbackComponent {

  public result: string | null =  null
  public error: string | null = null
  
  constructor(private readonly nodeBindCallbackService: NodeBindCallbackService) {}

  fetchResult(param: string) {
    this.result = null
    this.error = null

    this.nodeBindCallbackService.getObservable(param).subscribe({
      next: (results: any) => {
        console.log(results)
        this.result = results
      },
      error: (err) => (this.error = err.message)
    })
  }
}
