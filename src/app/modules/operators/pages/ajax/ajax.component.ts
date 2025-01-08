import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AjaxService } from '@modules/operators/services/ajax.service';

@Component({
  standalone: true,
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrl: './ajax.component.sass',
  imports: [CommonModule]
})
export class AjaxComponent {

  data: any;

  constructor(private readonly ajaxService: AjaxService) {}

  ngOnInit() {
    this.ajaxService.getMockData().subscribe({
      next: (response) => (this.data = response.response),
      error:  (err) => console.error("Error trayendo la información: ", err),
      complete: () => console.log(this.data)
    })
  }
}
