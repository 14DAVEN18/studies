import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefinitionsService } from './services/definitions.service';
import { Definition } from './interfaces/definition';


@Component({
  selector: 'app-definitions',
  standalone: true,
  imports: [],
  templateUrl: './definitions.component.html',
  styleUrl: './definitions.component.sass'
})
export class DefinitionsComponent {
  private queryParam: string | null = null
  public definition: Definition | null = null; 

  constructor(
    private readonly route: ActivatedRoute,
    private readonly definitionService: DefinitionsService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.queryParam = params.get('q')
      if(this.queryParam)
        this.definition = this.definitionService.getDefinition(this.queryParam)
    })
  }
}
