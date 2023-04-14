import { Component } from '@angular/core';
import { Actor } from '../../models/actor';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: '../../app.component.html',
  styleUrls: ['../../app.component.scss']
})
export class AppComponent {
  title = 'producto1';

  actorClicado: Actor | null = null;
  nombre: string = "";
  actores: Actor[] = [];

  pais: string = ""; 

  masculino: boolean = false;
  femenino: boolean = false;

  constructor(private firestoreService: FirestoreService) {
    this.getActorsFromFirestore();
  }

  recibirActorClicado(evento: Actor){
    this.actorClicado = evento;
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
          video: actorData.video,
        };
        return actor;
      });
    });
  }
}
