import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biografias',
  templateUrl: './biografias.component.html',
  styleUrls: ['./biografias.component.scss']
})
export class BiografiasComponent implements OnInit {

  constructor() { }

img01 = '/assets/biografia/bio_01.jpg';
img02 = '/assets/biografia/bio_02.jpg';
img03 = '/assets/biografia/bio_03.jpg';
img04 = '/assets/biografia/bio_04.jpg';
img05 = '/assets/biografia/bio_05.jpg';
img06 = '/assets/biografia/bio_06.jpg';
img07 = '/assets/biografia/bio_07.jpg';
img08 = '/assets/biografia/bio_08.jpg';
img09 = '/assets/biografia/bio_09.jpg';
img10 = '/assets/biografia/bio_10.jpg';

caminho="Biografia";

  ngOnInit(): void {
  }

}
