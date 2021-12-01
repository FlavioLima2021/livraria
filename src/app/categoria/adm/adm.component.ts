import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {

  constructor() { }

  img01 = '/assets/adm/adm_01.jpg';
  img02 = '/assets/adm/adm_02.jpg';
  img03 = '/assets/adm/adm_03.jpg';
  img04 = '/assets/adm/adm_04.jpg';
  img05 = '/assets/adm/adm_05.jpg';
  img06 = '/assets/adm/adm_06.jpg';
  img07 = '/assets/adm/adm_07.jpg';
  img08 = '/assets/adm/adm_08.jpg';
  img09 = '/assets/adm/adm_09.jpg';
  img10 = '/assets/adm/adm_10.jpg';

  caminho="Administração";

  ngOnInit(): void {
  }

}
