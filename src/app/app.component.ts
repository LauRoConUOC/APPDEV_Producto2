import { Component } from '@angular/core';
import { Actor } from './models/actor';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'producto1';

  actorClicado = -1;
  nombre: string = "";
  actores: Actor[] = [];
  actoresRef: AngularFireList<any>;

  pais: string = "";

  masculino: boolean = false;
  femenino: boolean = false;

  constructor(private db: AngularFireDatabase) {
    this.actoresRef = db.list('actors'); // Cambiado a 'actors'
    this.actoresRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(data => {
      this.actores = data;
    });
  }

  recibirActorClicado(evento: number) {
    this.actorClicado = evento;
  }
}
