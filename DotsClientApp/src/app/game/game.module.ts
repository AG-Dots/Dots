import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { NavComponent } from '../nav/nav.component';
import { BoardComponent } from './board/board.component';
import { MyMaterialModuleModule } from '../../my-material-module.module';
import { DotComponent } from './dot/dot.component';
import { BoxComponent } from './box/box.component';
import { LineComponent } from './line/line.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GameRoutingModule,
    MyMaterialModuleModule
  ],
  declarations: [
    GameComponent,
    NavComponent,
    BoardComponent,
    DotComponent,
    BoxComponent,
    LineComponent
  ]
})
export class GameModule { }
