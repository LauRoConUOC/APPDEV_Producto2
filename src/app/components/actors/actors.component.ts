import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  @Input()actores: Actor[] = [];
  @Input() nombre: string = '';
  @Input() masculino: boolean = false;
  @Input() femenino: boolean = false;
  @Input() pais: string = '';
  @Output() actorClicado: EventEmitter<Actor> = new EventEmitter<Actor>();

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.getActorsFromFirestore();
  }

  enviarActorClicado(actor: Actor): void {
    this.actorClicado.emit(actor);
  }

  getActorsFromFirestore() {
    this.firestoreService.getDocuments('actors').subscribe((actorsData) => {
      this.actores = actorsData.map((actorData) => {
        const actor: Actor = {
          nombre: actorData.nombre,
          genero: actorData.genero,
          nacionalidad: actorData.nacionalidad,
          edad: actorData.edad,
          descripcion: actorData.descripcion,
          activo:actorData.activo,
          video: actorData.video,
          foto: actorData.foto
        };
        return actor;
      });
    });
  }
}
