import { Component, Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
  @Input() persona: Persona;

}
