import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActorsComponent } from './components/actors/actors.component';
import { PlayerComponent } from './components/player/player.component';
import { DetailComponent } from './components/detail/detail.component';
import { FiltroPais } from './pipes/filtertPais.pipe';
import { FiltroGenero } from './pipes/filterGenero.pipe';
import { FilternombrePipe } from './pipes/filternombre.pipe';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    PlayerComponent,
    DetailComponent,
    FiltroPais,
    FiltroGenero,
    FilternombrePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
