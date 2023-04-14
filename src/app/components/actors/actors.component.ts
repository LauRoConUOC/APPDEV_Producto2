<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from '@angular/core';
import { Actor } from '../../models/actor';
=======
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
>>>>>>> parent of f9cf995 (Update actors.component.ts)
=======
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
>>>>>>> parent of f9cf995 (Update actors.component.ts)
=======
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
>>>>>>> parent of f9cf995 (Update actors.component.ts)
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  actores: Actor[] = [];
  @Input() nombre: string = '';
  @Input() masculino: boolean = false;
  @Input() femenino: boolean = false;
  @Input() pais: string = '';
  @Output() actorClicado: EventEmitter<Actor> = new EventEmitter();

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.getActorsFromFirestore();
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  enviarActorClicado(index: number): void {
    this.actorClicado.emit(this.actores[index]);
>>>>>>> parent of f9cf995 (Update actors.component.ts)
=======
  enviarActorClicado(index: number): void {
    this.actorClicado.emit(this.actores[index]);
>>>>>>> parent of f9cf995 (Update actors.component.ts)
=======
  enviarActorClicado(index: number): void {
    this.actorClicado.emit(this.actores[index]);
>>>>>>> parent of f9cf995 (Update actors.component.ts)
  }




}
