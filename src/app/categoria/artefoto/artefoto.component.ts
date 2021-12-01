import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artefoto',
  templateUrl: './artefoto.component.html',
  styleUrls: ['./artefoto.component.scss']
})
export class ArtefotoComponent implements OnInit {

  constructor() { }

  img01 = '/assets/fotoarte/fotoarte_01.jpg';
  img02 = '/assets/fotoarte/fotoarte_02.jpg';
  img03 = '/assets/fotoarte/fotoarte_03.jpg';
  img04 = '/assets/fotoarte/fotoarte_04.jpg';
  img05 = '/assets/fotoarte/fotoarte_05.jpg';
  img06 = '/assets/fotoarte/fotoarte_06.jpg';
  img07 = '/assets/fotoarte/fotoarte_07.jpg';
  img08 = '/assets/fotoarte/fotoarte_08.jpg';
  img09 = '/assets/fotoarte/fotoarte_09.jpg';
  img10 = '/assets/fotoarte/fotoarte_10.jpg';

  caminho="Artes e Fotografias";




  ngOnInit(): void {
  }

}
