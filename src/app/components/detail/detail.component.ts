import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  actores: Actor[] = [];
  @Input() actorClicado: number = -1;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreService.getDocuments('actors').subscribe((actors) => {
      this.actores = actors;
    });
  }
}