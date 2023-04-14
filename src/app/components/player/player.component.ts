import { Component, Input } from '@angular/core';
import { ACTORES } from 'src/app/models/info-actor';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  actores: Actor[] = ACTORES;
  

  @Input( ) actorClicado: number = -1;

  valor: number = this.actorClicado;
  




}
