import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ACTORES } from 'src/app/models/info-actor';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    actores: Actor[] = ACTORES;
  

    @Input( ) actorClicado: number = -1;
}
