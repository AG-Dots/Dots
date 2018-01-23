import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DotElement } from '../models/index';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss'],
  animations: [
    trigger('enter', [
      transition(':enter',
        [style({ transform: 'scaleX(0)' }), animate('0.2s 0.2s ease-in')])
    ])
  ]
})
export class DotComponent implements OnInit {

  @Input() dot: DotElement;
  constructor() { }

  ngOnInit() {
  }

}
