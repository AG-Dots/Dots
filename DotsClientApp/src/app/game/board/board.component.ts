import { Component, OnInit } from '@angular/core';
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { BoardElement } from '../models/index';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0, offset: 0 }), { optional: true }),

        query(':enter', stagger('50ms', [
          animate('0.1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(20px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ]))]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class BoardComponent implements OnInit {

  board: BoardElement;

  constructor() { }

  ngOnInit() {
    this.board = new BoardElement(600, 600, 8, 8);
  }

}
