import { Component, OnInit } from '@angular/core';
import { EclassService } from './services/eclass.service';
// import {DaoService} from "./services/dao.service";

@Component({
  selector: 'app-eclass',
  templateUrl: './eclass.component.html',
  styleUrls: ['./eclass.component.scss'],
})
export class EclassComponent implements OnInit {
  pageTitle: string = 'E-Class Search and Explore App';

  constructor(
    public eclassService: EclassService
  ) // public daoService: DaoService,
  {}

  ngOnInit(): void {}

  openFile() {
    let inputElement = document.querySelector('input');
    inputElement && inputElement.click();
  }
}
