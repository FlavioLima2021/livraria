import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {

  constructor() { }

img01 = '/assets/terror/terror_01.jpg';
img02 = '/assets/terror/terror_02.jpg';
img03 = '/assets/terror/terror_03.jpg';
img04 = '/assets/terror/terror_04.jpg';
img05 = '/assets/terror/terror_05.jpg';
img06 = '/assets/terror/terror_06.jpg';
img07 = '/assets/terror/terror_07.jpg';
img08 = '/assets/terror/terror_08.jpg';
img09 = '/assets/terror/terror_09.jpg';
img10 = '/assets/terror/terror_10.jpg';

caminho="Terror";

  ngOnInit(): void {
  }

}
