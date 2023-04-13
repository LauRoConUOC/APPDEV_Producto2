import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() actorClicado: number = -1;
  @Input() actores: Actor[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore
      .collection<Actor>('actors')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Actor;
            const key = a.payload.doc.id;
            return { key, ...data };
          })
        )
      )
      .subscribe((data) => {
        this.actores = data;
      });
  }
}
