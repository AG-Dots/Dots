import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { LineElement } from '../models/line-element';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {


  hovered = false;
  lineWidth = 7;
  classElement = "line";
  @Input() line: LineElement;

  constructor() { }


  @HostListener('click') onClick() {
    this.line.toggleState();
    this.classElement = 'line ' + this.line.state;
  }


  ngOnInit() {
  }



}

