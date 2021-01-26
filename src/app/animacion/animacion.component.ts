import { animate, transition, trigger,state,style  } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css'],
  animations: [
    trigger('WB', [
      state('open', style({
        heigh: '200px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      state('bye', style({
        heigh: '100px',
        opacity: 2,
        backgroundColor: 'purple'
      })),
      transition('* => open',[
        animate('1s')
      ]),
      transition('* => bye',[
        animate('2s')
      ]),
    ]),
  ],
})
export class AnimacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
