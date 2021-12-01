import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {

  constructor() { }

img01 = '/assets/historia/historia_01.jpg';
img02 = '/assets/historia/historia_02.jpg';
img03 = '/assets/historia/historia_03.jpg';
img04 = '/assets/historia/historia_04.jpg';
img05 = '/assets/historia/historia_05.jpg';
img06 = '/assets/historia/historia_06.jpg';
img07 = '/assets/historia/historia_07.jpg';
img08 = '/assets/historia/historia_08.jpg';
img09 = '/assets/historia/historia_09.jpg';
img10 = '/assets/historia/historia_10.jpg';

caminho="História";

  ngOnInit(): void {
  }

}
