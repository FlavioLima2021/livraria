import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspense',
  templateUrl: './suspense.component.html',
  styleUrls: ['./suspense.component.scss']
})
export class SuspenseComponent implements OnInit {

  constructor() { }

img01 = '/assets/suspense/suspense_01.jpg';
img02 = '/assets/suspense/suspense_02.jpg';
img03 = '/assets/suspense/suspense_03.jpg';
img04 = '/assets/suspense/suspense_04.jpg';
img05 = '/assets/suspense/suspense_05.jpg';
img06 = '/assets/suspense/suspense_06.jpg';
img07 = '/assets/suspense/suspense_07.jpg';
img08 = '/assets/suspense/suspense_08.jpg';
img09 = '/assets/suspense/suspense_09.jpg';
img10 = '/assets/suspense/suspense_10.jpg';

caminho="Suspense";

  ngOnInit(): void {
  }

}
