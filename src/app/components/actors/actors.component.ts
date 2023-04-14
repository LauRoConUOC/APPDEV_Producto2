<<<<<<< HEAD
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
=======
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ACTORES } from 'src/app/models/info-actor';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})


export class ActorsComponent  {
  actores: Actor[] = ACTORES;
  @Input() nombre: string ="";
  @Input() masculino: boolean =false;
  @Input() femenino: boolean =false;
  @Input( ) pais: string ="";
  @Output() actorClicado: EventEmitter<number> = new EventEmitter();
  
  enviarActorClicado(valor: number): void {
    this.actorClicado.emit(valor);
>>>>>>> parent of 7130e80 (Primeros pasos con actors)
  }




}
