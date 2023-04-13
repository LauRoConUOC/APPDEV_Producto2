import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // Método para obtener documentos de una colección
  getDocuments(collection: string): Observable<any[]> {
    return this.firestore.collection(collection).valueChanges({ idField: 'id' });
  }
}
