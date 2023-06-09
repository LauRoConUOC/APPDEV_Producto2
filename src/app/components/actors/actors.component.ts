import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  @Input() actores: Actor[] = [];
  @Input() nombre: string = '';
  @Input() masculino: boolean = false;
  @Input() femenino: boolean = false;
  @Input() pais: string = '';

  @Output() actorClicado: EventEmitter<Actor> = new EventEmitter<Actor>();
  @Output() editarActor: EventEmitter<Actor> = new EventEmitter<Actor>();
  @Output() nuevoActor: EventEmitter<void> = new EventEmitter<void>();

  constructor(private firestoreService: FirestoreService, private router: Router) {}

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
          id: actorData.id,
          nombre: actorData.nombre,
          genero: actorData.genero,
          nacionalidad: actorData.nacionalidad,
          edad: actorData.edad,
          descripcion: actorData.descripcion,
          activo: actorData.activo,
          video: actorData.video,
          foto: actorData.foto
        };
        return actor;
      });
    });
  }

  eliminarActor(actor: Actor, index: number, event: MouseEvent): void {
    event.stopPropagation(); // Evita que el evento de clic se propague al elemento padre
    if (actor.id) {
      this.firestoreService.deleteDocument('actors', actor.id).then(() => {
        this.actores.splice(index, 1);
      });
    } else {
      console.error('El actor no tiene un ID válido.');
    }
  }

  onEditarActor(actor: Actor, event: MouseEvent): void {
    event.stopPropagation(); // Evita que el evento de clic se propague al elemento padre
    if (actor.id) {
      this.editarActor.emit(actor);
      this.router.navigate(['/edit-actor', actor.id]);
    } else {
      console.error('El actor no tiene un ID válido.');
    }
  }

  onNuevoActor() {
    const nuevoActor: Actor = {
      nombre: 'NUEVO ACTOR',
      nacionalidad: '',
      genero: '',
      edad: 0,
      descripcion: '',
      activo: '',
      video: '',
      foto: ''
    };
    this.firestoreService.addActor('actors', nuevoActor).then((docRef) => {
      this.editarActor.emit(docRef.id);
    });
  }
}

