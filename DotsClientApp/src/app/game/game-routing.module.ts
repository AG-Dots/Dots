import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game.component';


const routes: Routes = [
  {
    path: 'user/game',
    component: GameComponent,
    children: [
      {
        path: '',
        component: BoardComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
